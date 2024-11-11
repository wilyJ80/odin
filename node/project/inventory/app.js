import express from "express";
import ejs from "ejs";
import { categoryRouter } from "./routes/categoryRouter.js";
import { storeRouter } from "./routes/storeRouter.js";
import { productRouter } from "./routes/productRouter.js";

export const app = express();

app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.use(express.urlencoded({ extended: true }));

app.use('/', storeRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);
