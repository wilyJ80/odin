import { pool } from './pool.js';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const selectClassPreview = async () => {
	const { rows } = await pool.query('SELECT c.class_id, c.class_name, s.student_id, s.student_name FROM students_classes sc JOIN classes c ON c.class_id = sc.class_id JOIN students s ON s.student_id = sc.student_id ORDER BY c.class_name, s.student_name');
	return rows;
};
