import assert from "node:assert";
import { describe, it } from "node:test";
import supertest from "supertest";
import { app } from "../app.js";

it('Should return 200', async () => {
	const response = await supertest(app)
		.get('/');
	assert.equal(response.status, 200);
});
