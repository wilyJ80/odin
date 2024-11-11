import { insertCategory, selectAllCategories, selectCategory, updateCategory } from "../db/categoryQueries.js";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getAllCategories = async (req, res) => {
	const categories = await selectAllCategories();
	res.render('categories.html', {
		categories: categories
	});
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getCategory = async (req, res) => {
	const category = await selectCategory(req.params.category);
	res.render('category.html', {
		category: category
	});
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const addCategory = async (req, res) => {
	await insertCategory(req.params.name);
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const putCategory = async (req, res) => {
	await updateCategory(req.params.id);
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const deleteCategory = async (req, res) => {
	await deleteCategory(req.params.id);
}
