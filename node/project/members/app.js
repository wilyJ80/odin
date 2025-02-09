import express from "express";
import ejs from 'ejs';

export const app = express();

// EJS config
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.get('/', (req, res) => {
	res.render('index.html');
});
