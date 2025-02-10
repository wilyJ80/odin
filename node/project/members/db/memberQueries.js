import { pool } from "./pool.js";

const Members = class {
	constructor() {
		this.pool = pool;
	}

	async selectMemberEmail(passportUsername) {
		const sql = `
			SELECT member_email, password FROM members WHERE member_email = $1
		`;
		const { rows } = await pool.query(sql, [passportUsername]);
		return rows;
	}

	selectMemberById = async (passportId) => {
		const sql = `
			SELECT * from members
			WHERE member_id = $1
		`;
		const { rows } = await pool.query(sql, [passportId]);
		return rows;
	}
};

// exported singleton
export const members = new Members();
