import { pool } from './pool.js';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const selectAllClasses = async () => {
	const { rows } = await pool.query('SELECT class_name FROM classes');
	return rows;
};
