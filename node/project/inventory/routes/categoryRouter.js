import Router from 'express';
import { getCategories } from '../controllers/categoryController.js';

export const categoryRouter = Router();

categoryRouter.get('/', getCategories);
