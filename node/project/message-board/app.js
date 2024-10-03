import express from "express";
import ejs from "ejs";

export const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

// Add JSON persistence
const messages = [
	{
		id: 0,
		text: 'Hi there!',
		user: 'Victor',
		added: new Date()
	},
	{
		id: 1,
		text: 'This is a test',
		user: 'Victor again',
		added: new Date()
	}
];

app.locals.routes = {
	newMessage: '/new',
	messageDetails: '/details'
};

app.get('/', (req, res) => {
	res.render('index.html', {
		messages: messages
	});
});

app.get('/new', (req, res) => {
	res.render('form.html', {
		messages: messages
	});
});

app.post('/new', (req, res) => {
	messages.push({ text: req.body.text, user: req.body.user, added: new Date() });
	res.redirect("/");
});

app.get('/details/:id', (req, res) => {
	const messageId = parseInt(req.params.id, 10);
	const message = messages.find(msg => msg.id === messageId);

	if (message) {
		res.render('details.html', { message });
	} else {
		res.status(404).send('Message not found');
	}
});
