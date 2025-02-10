import { pool } from "./pool.js";

const Messages = class {
	constructor() {
		this.pool = pool;
	}

	async selectMessagesSummarized() {
		const sql = `
		SELECT b.member_firstname, b.member_lastname, s.message_date
		FROM messages s
		JOIN members b ON s.member_id = b.member_id
		`;
		const { rows } = await pool.query(sql);
		return rows;
	}
};

// exported singleton
export const messages = new Messages();
