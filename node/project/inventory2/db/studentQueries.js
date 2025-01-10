import { pool } from './pool.js';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const insertStudent = async (student, schoolClass) => {
	await pool.query('INSERT INTO students (student_name) VALUES ($1)');
	// TODO: too tired!
}
