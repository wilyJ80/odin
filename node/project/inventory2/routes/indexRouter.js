import Router from 'express';
import { getIndex } from '../controller/indexController.js';

export const indexRouter = Router();

indexRouter.get('/', getIndex);
