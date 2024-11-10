import { selectAllCategories } from "../db/categoryQueries.js";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getAllCategories = async (req, res) => {
	const categories = await selectAllCategories();
	res.render('category.html', {
		categories: categories
	});
}
