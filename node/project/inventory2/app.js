import express from 'express';
import ejs from 'ejs';

export const app = express();

app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.render('index.html');
});
