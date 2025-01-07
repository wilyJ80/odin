import { selectAllClassesAndStudents } from '../db/classQueries.js';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getIndex = async (req, res) => {
	const results = await selectAllClassesAndStudents();
	const grouped = Object.groupBy(results, ({ class_name }) => class_name);
	const allClasses = Object.entries(grouped).map(([class_name, students]) => ({
		class_name,
		students: students.map(({ student_name }) => student_name)
	}));
	res.render('index.html', {
		allClasses: allClasses
	});
};
