import Router from "express";
import { usersListGet, usersCreateGet, usersCreatePost, usersUpdateGet, usersUpdatePost, usersDeletePost, usersSearchGet } from "../controllers/usersController.js";

export const usersRouter = Router();

usersRouter.get("/", usersListGet);
usersRouter.get("/create", usersCreateGet);
usersRouter.post("/create", ...usersCreatePost);

usersRouter.get("/:id/update", usersUpdateGet);
usersRouter.post("/:id/update", ...usersUpdatePost);

usersRouter.post("/:id/delete", usersDeletePost);

usersRouter.get("/search", usersSearchGet);
