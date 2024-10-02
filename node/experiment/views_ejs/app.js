import express from 'express';
import ejs from "ejs";
import path from 'node:path';

export const app = express();

app.set('view engine', 'ejs');
// Rendering .html with ejs
app.engine('html', ejs.renderFile);

const assetsPath = path.join(import.meta.dirname, 'public');
app.use(express.static(assetsPath));

const links = [
	{ href: '/', text: 'Home' },
	{ href: 'about', text: 'About' }
];

const users = ['Admin', 'Victor', 'Rick'];

app.get('/', (req, res) => {
	res.render('index.html', {
		links: links,
		users: users
	});
});

app.get('/about', (req, res) => {
	res.render('about.html');
})
