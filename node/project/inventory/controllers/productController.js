import { insertProduct, selectAllProducts, selectProductByName, updateProductName, deleteProductByName } from '../db/productQueries.js';


/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getAllProducts = async (req, res) => {
	const products = await selectAllProducts();
	res.render('products.html', {
		products: products
	});
}


/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getProduct = async (req, res) => {
	const product = await selectProductByName(req.params.product);
	res.render('product.html', {
		product: product
	});
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const addProduct = async (req, res) => {
	await insertProduct(req.params.name, req.params.cents);
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const putProductName = async (req, res) => {
	await updateProductName(req.params.newname, req.params.oldname);
}

// putProductPrice

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const removeProduct = async (req, res) => {
	await deleteProductByName(req.params.name);
}
