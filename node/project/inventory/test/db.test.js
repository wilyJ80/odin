import { describe, it, before } from "node:test";
import { deepEqual } from "node:assert/strict";
import { pool } from "../db/pool.js";
import { deleteCategory, insertCategory, selectAllCategories, selectCategory, updateCategory } from "../db/categoryQueries.js";
import { insertProduct, selectAllProducts } from "../db/productQueries.js";

describe('Category DB tests', () => {
	before(async () => {
		await pool.query('DELETE FROM categories');
	});

	it('CRUDs categories correctly', async () => {
		const firearmsId = await insertCategory('Firearms');
		const technologyId = await insertCategory('Technology');

		const rows = await selectAllCategories();
		deepEqual(rows, [{ name: 'Firearms' }, { name: 'Technology' }]);

		const row = await selectCategory(firearmsId);
		deepEqual(row, [{ name: 'Firearms' }]);

		const updatedFirearmsId = await updateCategory('Family', firearmsId);
		deepEqual(firearmsId, updatedFirearmsId);

		const deletedTechnologyId = await deleteCategory(technologyId);
		deepEqual(technologyId, deletedTechnologyId);
	});
});

describe('Product tests', () => {
	before(async () => {
		await pool.query('DELETE FROM categories');
	});
	it('CRUDs products correctly', async () => {
		const guitarId = await insertProduct('Guitar', 300000);
		const jewelId = await insertProduct('Jewel', 400000);

		const rows = await selectAllProducts();
		// Continue here...
	});
});
