import { selectAllClasses } from '../db/classQueries.js';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getIndex = async (req, res) => {
	const classes = await selectAllClasses();
	res.render('index.html', {
		classes: classes
	});
};
