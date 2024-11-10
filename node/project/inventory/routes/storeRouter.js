import Router from 'express';
import { getStore } from '../controllers/storeController.js';

export const storeRouter = Router();

storeRouter.get('/', getStore);
