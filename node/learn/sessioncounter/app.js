const express = require('express');
const sqlite = require('better-sqlite3');
const session = require('express-session');

const SqliteStore = require('better-sqlite3-session-store')(session);
const db = new sqlite('sessions.db');

const app = express();

app.use(
	session({
		store: new SqliteStore({
			client: db,
			expired: {
				clear: true,
				intervalMs: 900000
			}
		}),
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24
		}
	})
);

app.get('/', (req, res) => {
	if (req.session.viewCount) {
		req.session.viewCount++;
	} else {
		req.session.viewCount = 1;
	}
	res.send(`<h1>Hi visited ${req.session.viewCount}</h1>`);
});

app.listen(3000, () => {
	console.log(`app listening port 3000`);
});
