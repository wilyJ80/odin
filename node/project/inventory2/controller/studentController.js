import { insertStudent } from '../db/studentQueries.js';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const addStudent = (req, res) => {
	const { name } = req.body;
}
