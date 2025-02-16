import { messages } from "../db/messageQueries.js";

const IndexController = class {
	constructor() {
		this.messages = messages;
	}

	/**
	 * @param {import('express').Request} req 
	 * @param {import('express').Response} res 
	*/
	getIndex = async (req, res) => {
		const messages = await this.messages.selectMessagesSummarized();
		console.table(res.locals);
		console.table(req.user);
		return res.render('index.html', {
			messages: messages,
			user: req.user
		});
	}
}

// exported singleton
export const indexController = new IndexController();
