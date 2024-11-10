import { selectAllCategories, selectAllProducts } from "../db/queries.js";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getStore = async (req, res) => {
	const categories = await selectAllCategories();
	const products = await selectAllProducts();
	res.render('index.html', {
		categories: categories, products: products
	});
}
