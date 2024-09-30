import Router from "express";
import { logPathData } from "./userController.js";

export const userRouter = Router();

userRouter.get("/:username/messages", logPathData);
