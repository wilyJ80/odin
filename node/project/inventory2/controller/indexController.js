import { selectClassPreview } from '../db/classQueries.js';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getIndex = async (req, res) => {
	const results = await selectClassPreview();
	const transformed = transformRows(results);
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
