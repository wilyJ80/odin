'use strict';

const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3222;

app.use(express.static(path.join(__dirname, 'views')));

/*
 * In case you want to use a template engine
 * app.set('views', path.join(__dirname, 'views'));
 * app.set('view engine', 'ejs');
	*/

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', './index.html'));
});

app.use((req, res) => {
	res.status(404).sendFile(path.join(__dirname, 'views', './404.html'));
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
