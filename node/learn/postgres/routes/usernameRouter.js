import Router from "express";
import { getUsers } from "../controllers/usernameController.js";

export const usernameRouter = Router();

usernameRouter.get('/', getUsers);
