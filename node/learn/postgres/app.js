import express from "express";
import ejs from "ejs";
import { usernameRouter } from "./routes/usernameRouter.js";

/**
 * @type {import('express').Application}
 */
export const app = express();

app.set('view engine', 'ejs');
app.engine('ejs', ejs.renderFile);
app.use(express.urlencoded({ extended: true }));
app.use('/', usernameRouter);
