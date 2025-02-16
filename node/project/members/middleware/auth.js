import session from 'express-session';
import passport from 'passport';
import local from 'passport-local';
import { app } from '../app.js';
import { members } from "../db/memberQueries.js";
import bcrypt from 'bcryptjs';

export const setupAuth = (app) => {
	app.use(session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false
	}));

	app.use(passport.initialize());
	app.use(passport.session());

	passport.use(
		new local.Strategy(async (username, password, done) => {
			try {
				const { rows } = await members.selectMemberEmail(username);
				const user = rows[0];

				if (!user) {
					return done(null, false, { message: 'Incorrect username' });
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
			const { rows } = await members.selectMemberById(id);
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
