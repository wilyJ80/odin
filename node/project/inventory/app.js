import express from "express";
import ejs from "ejs";
import { categoryRouter } from "./routes/categoryRouter.js";

export const app = express();

app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.use(express.urlencoded({ extended: true }));
app.use('/', categoryRouter);
