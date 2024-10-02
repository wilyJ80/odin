'use strict';

const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3132;

app.get('/', (req, res) => {
	res.send('Hello, cutie!');
});

app.get('/file', (req, res) => {
	res.sendFile(path.join(__filename));
});

app.listen(PORT, () => {
	console.log(`My first Express app - listening on port ${PORT}`);
});
