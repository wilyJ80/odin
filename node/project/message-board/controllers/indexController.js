import fs from "node:fs/promises";
import path from "node:path";

/* No direct import for ESM on Node at the time of writing ;-; */
export async function loadMessages() {
	try {
		const filePath = path.resolve(import.meta.dirname, '../db/initial-schema.json');
		const data = await fs.readFile(filePath);
		return JSON.parse(data);
	} catch (err) {
		console.error(`Error loading initial schema: ${err}`);
	}
}

export const messages = await loadMessages();

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
