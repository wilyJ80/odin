import { pool } from "./pool.js";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const selectAllCategories = async (req, res) => {
	const { rows } = await pool.query('SELECT name FROM categories');
	return rows;
}
