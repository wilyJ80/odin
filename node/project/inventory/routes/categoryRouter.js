import Router from 'express';
import { getAllCategories } from "../controllers/categoryController.js";

export const categoryRouter = Router();

categoryRouter.get('/', getAllCategories);
