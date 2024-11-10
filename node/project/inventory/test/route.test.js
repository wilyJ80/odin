import assert from "node:assert";
import { describe, it } from "node:test";
import supertest from "supertest";
import { app } from "../app.js";

describe('Store tests', () => {
	it('store render request returns index page', async () => {
		const response = await supertest(app)
			.get('/');
		assert.deepEqual(response.status, 200);
		assert.deepEqual(response.type, 'text/html');
	});
});

describe('Category tests', () => {
	it('getting all categories returns categories page', async () => {
		const response = await supertest(app)
			.get('/categories');
		assert.deepEqual(response.status, 200);
	});
});
