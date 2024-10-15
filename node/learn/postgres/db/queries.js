import { pool } from "./pool.js";

export const getAllUsernames = async () => {
	const { rows } = await pool.query('SELECT username FROM usernames');
	return rows;
}

export const insertUsername = async (username) => {
	await pool.query(`INSERT INTO usernames (username) VALUES ($1)`, [username]);
}

export const searchUsername = async (searchQuery) => {
	const { rows } = await pool.query(`SELECT username FROM usernames WHERE username ILIKE '%' || $1 || '%'`, [searchQuery]);
	return rows;
}
