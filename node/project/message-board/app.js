import express from "express";
import ejs from "ejs";

export const app = express();

app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

const messages = [
	{
		text: 'Hi there!',
		user: 'Victor',
		added: new Date()
	},
	{
		text: 'This is a test',
		user: 'Victor again',
		added: new Date()
	}
];

app.get('/', (req, res) => {
	res.render('index.html', {
		messages: messages
	});
});

app.get('/new', (req, res) => {
	res.render('form.html');
});
