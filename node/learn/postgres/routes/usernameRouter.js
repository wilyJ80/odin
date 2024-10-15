import Router from "express";
import { getUsers, addUserGet, addUserPost, searchUserGet, searchUserPost } from "../controllers/usernameController.js";

export const usernameRouter = Router();

usernameRouter.get('/', getUsers);

usernameRouter.get('/new', addUserGet);
usernameRouter.post('/new', addUserPost);

usernameRouter.get('/search', searchUserGet);
usernameRouter.post('/search', searchUserPost);
