import Router from 'express';

export const categoryRouter = Router();

categoryRouter.get('/', getCategories);
