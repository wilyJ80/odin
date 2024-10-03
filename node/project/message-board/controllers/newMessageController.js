import { messages } from "../controllers/indexController.js";

export const newMessagePage = (req, res) => {
	res.render('form.html', {
		messages: messages
	});
};

export const addNewMessage = (req, res) => {
	messages.push({ text: req.body.text, user: req.body.user, added: new Date() });
	res.redirect("/");
};
