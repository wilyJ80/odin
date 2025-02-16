import session from 'express-session';
import passport from 'passport';
import local from 'passport-local';
import { members } from "../db/memberQueries.js";
import bcrypt from 'bcryptjs';
import connectPgSimple from 'connect-pg-simple';
import { pool } from '../db/pool.js';

const pgSession = connectPgSimple(session);

export const setupAuth = (app) => {
	app.use(session({
		store: new pgSession({
			pool: pool,
		}),
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }
	}));

	app.use(passport.initialize());
	app.use(passport.session());

	passport.use(
		new local.Strategy({ usernameField: 'email', passwordField: 'password' }, async (email, password, done) => {
			try {
				const rows = await members.selectMemberEmail(email);
				const user = rows[0];

				if (!user) {
					return done(null, false, { message: 'Incorrect email' });
				}

				const match = await bcrypt.compare(password, user.password);
				if (!match) {
					return done(null, false, { message: 'Incorrect password' });
				}

				return done(null, user);

			} catch (error) {
				return done(error);
			}
		})
	)

	passport.serializeUser((user, done) => {
		done(null, user.member_id);
	});

	passport.deserializeUser(async (id, done) => {
		try {
			const rows = await members.selectMemberById(id);
			const user = rows[0];

			done(null, user);

		} catch (error) {
			done(error);
		}
	});

	// pass user object to global variable
	app.use((req, res, next) => {
		res.locals.currentUser = req.user;
		next();
	});
}
