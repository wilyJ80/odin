import express from "express";
import ejs from 'ejs';
import { indexRouter } from "./routes/indexRouter.js";
import { sessionRouter } from "./routes/sessionRouter.js";
import { setupAuth } from "./middleware/auth.js";

export const app = express();

// Query strings
app.use(express.urlencoded({ extended: true }));

// EJS config
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

// Static file config
app.use(express.static('public'));

// Setup auth before routes
setupAuth(app);

// Routers
app.use('/', indexRouter);
app.use('/session', sessionRouter);
