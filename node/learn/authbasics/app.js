import path from 'node:path';
import { pool } from './db/pool.js';
import ejs from 'ejs';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import local from 'passport-local';
import bcrypt from 'bcryptjs';
const LocalStrategy = local.Strategy;

const app = express();

app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.use(session({ secret: 'cats', resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res, next) => {
	try {
		const users = await pool.query('SELECT * FROM users');
		const rows = users.rows;
		res.render('index.html', {
			users: rows,
			user: req.user
		});
	} catch (error) {
		return next(error);
	}
});

app.get('/sign-up', (req, res) => {
	res.render('sign-up-form.html');
});

app.post('/sign-up', async (req, res, next) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [req.body.username, hashedPassword]);
		res.redirect('/');
	} catch (error) {
		return next(error);
	}
});

passport.use(
	new LocalStrategy(async (username, password, done) => {
		try {
			const { rows } = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
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
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	try {
		const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
		const user = rows[0];

		done(null, user);
	} catch (error) {
		done(error);
	}
});

app.post(
	'/log-in',
	passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/'
	})
);

app.get('/log-out', (req, res, next) => {
	req.logout((err) => {
		if (err) {
			return next(err);
		}
		res.redirect('/');
	});
});

const PORT = 3101;
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
