import { messages } from "../db/messageQueries.js";

const IndexController = class {
	constructor() {
		this.messages = messages;
	}

	/**
	 * @param {import('express').Request} req 
	 * @param {import('express').Response} res 
	*/
	async getIndex(req, res) {
		const messages = await this.messages.selectMessagesSummarized();
		return res.render('index.html', {
			messages: messages
		});
	}
}

// exported singleton
export const indexController = new IndexController();
