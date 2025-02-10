import Router from 'express';
import { loginController } from "../controller/loginController.js";

export const loginRouter = Router();

loginRouter.get('/', loginController.getLogin);
loginRouter.post('/', loginController.postLogin);
