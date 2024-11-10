import { pool } from "./pool.js";

export const selectAllCategories = async () => {
	const { rows } = await pool.query('SELECT name FROM categories');
	return rows;
}

export const selectCategory = async (category) => {
	const { rows } = await pool.query('SELECT $1 FROM categories', [category]);
	return rows;
}

export const insertCategory = async (req, res) => {
	const { rows } = await pool.query('INSERT INTO categories (name) VALUES ($1)');
	return rows;
}

export const updateCategory = async (req, res) => {
	const { rows } = await pool.query('UPDATE categories SET name = $1 WHERE id = $2');
	return rows;
}

export const deleteCategory = async (req, res) => {
	const { rows } = await pool.query('DELETE FROM categories WHERE id = $1');
	return rows;
}
