import fs from "node:fs/promises";
import path from "node:path";

/* No direct import for ESM on Node at the time of writing ;-; */
export async function loadMessages() {
	const filePath = path.resolve(import.meta.dirname, '../db/initial-schema.json');
	try {
		const data = await fs.readFile(filePath);
		return JSON.parse(data);
	} catch (error) {
		console.error(`Error loading initial schema: ${error}`);
	}
}

export const messages = await loadMessages();

export const routes = {
	newMessage: '/new',
	messageDetails: '/details'
};

export function getMessages(req, res) {
	res.render('index.html', {
		messages: messages,
		routes: routes
	});
};

export function getMessageDetails(req, res) {
	const messageId = parseInt(req.params.id, 10);
	const message = messages.find(msg => msg.id === messageId);

	if (message) {
		res.render('details.html', { message });
	} else {
		res.status(404).send('Message not found');
	}
};
