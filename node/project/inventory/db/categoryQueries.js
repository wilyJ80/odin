import { pool } from "./pool.js";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const selectAllCategories = async (req, res) => {
	const { rows } = await pool.query('SELECT name FROM categories');
	return rows;
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const selectCategory = async (req, res) => {
	const { rows } = await pool.query('SELECT $1 FROM categories');
	return rows;
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const insertCategory = async (req, res) => {
	const { rows } = await pool.query('INSERT INTO categories (name) VALUES ($1)');
	return rows;
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const updateCategory = async (req, res) => {
	const { rows } = await pool.query('UPDATE categories SET name = $1 WHERE id = $2');
	return rows;
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const deleteCategory = async (req, res) => {
	const { rows } = await pool.query('DELETE FROM categories WHERE id = $1');
	return rows;
}
