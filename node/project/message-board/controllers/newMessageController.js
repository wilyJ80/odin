import { messages } from "../controllers/indexController.js";

export const newMessagePage = (req, res) => {
	res.render('form.html', {
		messages: messages
	});
};

export const addNewMessage = (req, res) => {
	const newId = messages.length > 0 ? messages[messages.length - 1].id + 1 : 0;
	const newMessage = { id: newId, text: req.body.text, user: req.body.user, added: new Date() };
	messages.push(newMessage);
	res.redirect("/");
};
