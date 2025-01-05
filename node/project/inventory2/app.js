import express from 'express';
import ejs from 'ejs';

import { indexRouter } from './routes/indexRouter.js'

export const app = express();

// use ejs as template engine
app.set('view engine', 'ejs');
// render .html files with ejs
app.engine('html', ejs.renderFile);
// parse request body
app.use(express.urlencoded({ extended: true }));
// serve static files (tailwind requires)
app.use(express.static('views'));

app.use('/', indexRouter);
