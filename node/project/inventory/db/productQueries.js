import { pool } from "./pool.js";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const selectAllProducts = async (req, res) => {
	const { rows } = await pool.query('SELECT name, cents FROM products');
	return rows;
}

export const selectProduct = async (req, res) => {
	const { rows } = await pool.query('SELECT $1 FROM products');
	return rows;
}
