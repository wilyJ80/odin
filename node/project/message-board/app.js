import express from "express";
import ejs from "ejs";
import { indexRouter } from "./routes/indexRouter.js";
import { newMessageRouter } from "./routes/newMessageRouter.js";

export const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.use('/', indexRouter);
app.use('/new', newMessageRouter);
