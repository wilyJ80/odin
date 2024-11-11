import Router from 'express';
import { getAllCategories, getCategory, addCategory } from "../controllers/categoryController.js";
import { deleteCategory, selectCategory } from '../db/categoryQueries.js';

export const categoryRouter = Router();

categoryRouter.get('/', getAllCategories);
// Should return the products from this category instead!
categoryRouter.get('/:categoryId', getCategory);
categoryRouter.post('/:categoryId', addCategory);
categoryRouter.put('/:categoryId', selectCategory);
categoryRouter.delete('/:categoryId', deleteCategory);
