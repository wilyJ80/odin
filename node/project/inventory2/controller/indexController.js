import { selectAllClassesAndStudents } from '../db/classQueries.js';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getIndex = async (req, res) => {
	const results = await selectAllClassesAndStudents();
	//console.log(results);
	//const grouped = Object.groupBy(results, ({ class_name }) => class_name);
	//const allClasses = Object.entries(grouped).map(([class_name, students]) => ({
	//	class_name,
	//	students: students.map(({ student_name }) => student_name)
	//}));
	const transformed = transformRows(results);
	console.log(transformed);
	res.render('index.html', {
		allClasses: transformed
	});
};

/** @param {Array<Object>} rows */
const transformRows = (rows) => {
	const result = [];

	for (const row of rows) {
		let classEntry = result.find(item => item.class.class_id === row.class_id);

		if (!classEntry) {
			classEntry = {
				class: { class_id: row.class_id, class_name: row.class_name },
				students: [],
			};
			result.push(classEntry);
		}

		classEntry.students.push({
			student_id: row.student_id,
			student_name: row.student_name,
		});
	}

	return result;
}
