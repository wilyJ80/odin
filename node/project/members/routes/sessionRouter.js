import Router from 'express';
import { sessionController } from "../controller/sessionController.js";

export const sessionRouter = Router();

sessionRouter.get('/login', sessionController.getLogin);
sessionRouter.post('/login', sessionController.postLogin);

sessionRouter.post('/logout', sessionController.performLogout);

sessionRouter.get('/signup', sessionController.getSignup);
sessionRouter.post('/signup', sessionController.postSignup);
