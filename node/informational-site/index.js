'use strict';

const http = require('http');
const url = require('url');
const fs = require('fs/promises');

const routes = ['./index.html', './about.html', './contact-me.html'];

http.createServer(async (req, res) => {
	const urlObj = url.parse(req.url);
	const path = `.${urlObj.pathname}`;

	let filename = path;
	if (!routes.includes(filename)) {
		filename = './404.html';
		res.writeHead(404, { 'Content-Type': 'text/html' });
	}

	try {
		const data = await fs.readFile(filename);
		res.write(data);
		res.end();
	} catch (fileReadError) {
		res.writeHead(404, { 'Content-Type': 'text/html' });
		res.end("500 internal server error");
	}

}).listen(3232);

console.log("Server listening on port 3232...");
