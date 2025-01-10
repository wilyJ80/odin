import { pool } from './pool.js';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const insertStudent = async (student_name, student_id, class_id) => {
	const client = await pool.connect();
	try {
		await client.query('BEGIN');
		await client.query('INSERT INTO students (student_name) VALUES ($1)', [student_name]);
		await client.query('INSERT INTO students_classes (student_id, class_id) VALUES ($1, $2)', [student_id, class_id]);
		await client.query('COMMIT');
	} catch (error) {
		await client.query('ROLLBACK');
	} finally {
		client.release();
	}
}
