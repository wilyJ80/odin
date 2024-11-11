import { pool } from "./pool.js";

export const selectAllCategories = async () => {
	const { rows } = await pool.query('SELECT name FROM categories');
	return rows;
}

/**
 * For... testing purposes?
 */
export const selectCategory = async (id) => {
	const { rows } = await pool.query('SELECT name FROM categories WHERE id = $1', [id]);
	return rows;
}

export const insertCategory = async (name) => {
	const { rows } = await pool.query('INSERT INTO categories (name) VALUES ($1) RETURNING id', [name]);
	return rows[0].id;
}

/**
 * TODO: Given a name, should update the name instead?
 */
export const updateCategory = async (categoryName, id) => {
	const { rows } = await pool.query('UPDATE categories SET name = $1 WHERE id = $2 RETURNING id', [categoryName, id]);
	return rows[0].id;
}

export const deleteCategory = async (id) => {
	const { rows } = await pool.query('DELETE FROM categories WHERE id = $1 RETURNING id', [id]);
	return rows[0].id;
}
