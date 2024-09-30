import supertest from 'supertest';
import { describe, it, expect } from 'vitest'
import { app } from "./app.js";

describe('main endpoint test', () => {
	it('should return param user and query sort date and direction ascending', async () => {
		const res = await supertest(app)
			.get('/user/victor/messages')
			.query({ sort: 'date', direction: 'ascending' })
			.expect(200);

		expect(res.text).toContain('Params: victor');
		expect(res.text).toContain('Query: {"sort":"date","direction":"ascending"}')
	});
});
