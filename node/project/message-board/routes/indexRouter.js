import Router from "express";
import { getMessages, getMessageDetails } from "../controllers/indexController.js";

export const indexRouter = Router();

indexRouter.get('/', getMessages);
indexRouter.get('/details/:id', getMessageDetails);
