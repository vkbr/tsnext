const express = require('express');
const path = require('path');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.port || 3000;
const app = next({
	dev,
	dir: dev ? path.resolve('./src') : path.resolve('./src'),
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.disable('X-Powered-By');

	server.get('/_next/*', (req, res) => {
		handle(req, res);
	});

	server.get('/static/*', (req, res) => {
		handle(req, res);
	});

	server.get('*', (req, res) => {
		handle(req, res);
	});

	server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
	});
});
