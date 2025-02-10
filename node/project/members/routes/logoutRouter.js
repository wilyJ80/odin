import Router from 'express';
import { logoutController } from "../controller/logoutController.js";

export const logoutRouter = Router();

logoutRouter.post('/', logoutController.performLogout);
