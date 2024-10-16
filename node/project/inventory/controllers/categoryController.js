import { selectAllCategories } from "../db/queries.js";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getCategories = async (req, res) => {
	const categories = await selectAllCategories();
	console.log(`${categories}`);
	res.send(categories.map(category => category.name).join(", "));
}
