import express from "express";
import ejs from 'ejs';
import { indexRouter } from "./routes/indexRouter.js";

export const app = express();

// Query strings
app.use(express.urlencoded({ extended: true }));

// EJS config
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

// Static file config
app.use(express.static('public'));

// Routers
app.use('/', indexRouter);
