import express from "express";
import { usersRouter } from "./routes/usersRouter.js";
import { renderFile } from "ejs";

/**
 * @type {import('express').Application}
 */
export const app = express();

app.set('view engine', 'ejs');
app.engine('html', renderFile);
app.use(express.urlencoded({ extended: true }));
app.use("/", usersRouter);
