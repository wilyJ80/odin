import supertest from "supertest";
import { describe, it } from "node:test";
import { app } from "../app.js";

describe('GET /', () => {
	it('responds with 200', async () => {
		/**
		 * @type {import('supertest').SuperTest}
		 */
		const res = await supertest(app)
			.get('/')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200);
	});
});

describe('GET /create', () => {
	it('responds with 200', async () => {
		/**
		 * @type {import('supertest').SuperTest}
		 */
		const res = await supertest(app)
			.get('/create')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200);
	})
})

describe('POST /create without validation', () => {
	it('responds with 400 Bad Request', async () => {
		/**
		 * @type {import('supertest').SuperTest}
		 */
		const res = await supertest(app)
			.post('/create')
			.expect(400);
	});
});

describe('POST /create with validation', () => {
	it('returns 302', { todo: true }, async () => {

	});
});
