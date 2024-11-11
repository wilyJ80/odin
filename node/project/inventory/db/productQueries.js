import { pool } from "./pool.js";

export const selectAllProducts = async () => {
	const { rows } = await pool.query('SELECT name, cents FROM products');
	return rows;
}

export const selectProductByName = async (name) => {
	const { rows } = await pool.query('SELECT name, cents FROM products WHERE name = $1', [name]);
	return rows;
}

export const insertProduct = async (name, cents) => {
	const { rows } = await pool.query('INSERT INTO products (name, cents) VALUES ($1, $2) RETURNING id', [name, cents]);
	return rows[0].id;
}

export const updateProductName = async (newName, oldName) => {
	const { rows } = await pool.query('UPDATE products SET name = $1 WHERE name = $2 RETURNING id', [newName, oldName]);
	return rows[0].id;
}

export const updateProductPrice = async (newPrice, oldPrice) => {
	const { rows } = await pool.query('UPDATE products SET price = $1 WHERE price = $2 RETURNING id', [newPrice, oldPrice]);
	return rows[0].id;
}

export const deleteProductByName = async (name) => {
	const { rows } = await pool.query('DELETE FROM categories WHERE name = $1 RETURNING id', [name]);
	return rows[0].id;
}
