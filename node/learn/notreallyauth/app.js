import express, { urlencoded } from "express";
import ejs from 'ejs';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

const PASSWORD = "secret";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const verifyPassword = (req, res, next) => {
	const password = req.query.password || req.body.password;

	if (password === PASSWORD) {
		next();
	} else {
		return res.sendStatus(401);
	}
}

app.get('/', (req, res) => {
	res.render('index.html');
});

app.post('/guess', (req, res) => {
	res.redirect('/message');
});

app.get('/message', verifyPassword, (req, res) => {
	return res.send('OK');
});

app.listen(3000);
