import express from 'express';
import ejs from 'ejs';

export const app = express();

// use ejs as template engine
app.set('view engine', 'ejs');
// render .html files with ejs
app.engine('html', ejs.renderFile);
// parse request body
app.use(express.urlencoded({ extended: true }));
// serve static files (tailwind requires)
app.use(express.static('views'));

app.get('/', (req, res) => {
	res.render('index.html');
});
