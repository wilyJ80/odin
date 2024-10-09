import supertest from "supertest";
import { describe, it } from "node:test";
import { app } from "./app.js";

describe('GET /', () => {
	it('responds with 200', async () => {
		/**
		 * @type {import('supertest').SuperTest}
		 */
		const res = await supertest(app)
			.get('/')
			.expect(200);
	})

});
