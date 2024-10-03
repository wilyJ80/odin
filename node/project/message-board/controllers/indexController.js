// TODO: Add JSON persistence
export const messages = [
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

export const routes = {
	newMessage: '/new',
	messageDetails: '/details'
};

export const getMessages = (req, res) => {
	res.render('index.html', {
		messages: messages,
		routes: routes
	});
};

export const getMessageDetails = (req, res) => {
	const messageId = parseInt(req.params.id, 10);
	const message = messages.find(msg => msg.id === messageId);

	if (message) {
		res.render('details.html', { message });
	} else {
		res.status(404).send('Message not found');
	}
};
