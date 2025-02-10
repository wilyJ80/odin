import session from 'passport';
import passport from 'passport';
import local from 'passport-local';
import { app } from '../app.js';
import { members } from "../db/memberQueries.js";

app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}));
app.use(passport.session());

passport.use(
	new local.Strategy(async (username, password, done) => {
		try {
			const { rows } = await members.selectMemberEmail(username);
			const user = rows[0];

			if (!user) {
				return done(null, false, { message: 'Incorrect username' });
			}

			if (user.password !== password) {
				return done(null, false, { message: 'Incorrect password' });
			}

			return done(null, user);

		} catch (error) {
			return done(error);
		}
	})
)

passport.serializeUser((user, done) => {
	done(null, user.id);
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
