import assert from "node:assert";
import { describe, it } from "node:test";
import supertest from "supertest";
import { app } from "../app.js";

describe('Store tests', () => {
	it('returns index page on store render request', async () => {
		const response = await supertest(app)
			.get('/');
		assert.deepEqual(response.status, 200);
		assert.deepEqual(response.type, 'text/html');
	});
});

describe('Category tests', () => {
	it('returns categories page on getting all categories', async () => {
		const response = await supertest(app)
			.get('/categories');
		assert.deepEqual(response.status, 200);
		assert.deepEqual(response.type, 'text/html');
	});

	it('requests specific category page', async () => {
		const response = await supertest(app)
			.get('/categories/0');
		assert.deepEqual(response.status, 200);
		assert.deepEqual(response.type, 'text/html');
	});

	it('can insert category', async () => {
		const response = await supertest(app)
			.post('/categories/0');
		assert.deepEqual(response.status, 200);
		assert.deepEqual(response.type, 'text/html');
	});
});
