import Router from "express";
import { getUsers, addUserGet, addUserPost } from "../controllers/usernameController.js";

export const usernameRouter = Router();

usernameRouter.get('/', getUsers);

usernameRouter.get('/new', addUserGet);
usernameRouter.post('/new', addUserPost);
