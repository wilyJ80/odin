import assert from "node:assert";
import { describe, it } from "node:test";
import supertest from "supertest";
import { app } from "../app.js";

it('Should return 200', async () => {
	const response = await supertest(app)
		.get('/');
	assert.deepEqual(response.status, 200);
});
