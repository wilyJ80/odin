import Router from 'express';
import { newMessagePage, addNewMessage } from "../controllers/newMessageController.js";

export const newMessageRouter = Router();

newMessageRouter.get('/', newMessagePage);
newMessageRouter.post('/', addNewMessage);
