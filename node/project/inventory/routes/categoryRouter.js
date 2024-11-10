import Router from 'express';
import { getAllCategories, getCategory } from "../controllers/categoryController.js";

export const categoryRouter = Router();

categoryRouter.get('/', getAllCategories);
categoryRouter.get('/:categoryId', getCategory);
categoryRouter.post('/:categoryId', addCategory);
