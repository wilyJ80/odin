import supertest from "supertest";
import { server } from "./server.js";
import { describe, expect, it } from "vitest";

describe('GET /', () => {
	it('responds with 200, Hello World text', async () => {
		const response = await supertest(server)
			.get('/')
			.expect(200);

		expect(response.text).toBe('Hello World');
	});
});
