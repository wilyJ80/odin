import { describe, it, before } from "node:test";
import assert from "node:assert/strict";
import { usersStorage } from "./storages/usersStorage.js";

describe('User tests', () => {
	before(() => {
		usersStorage.deleteAllUsers();
	});

	// get users, return none
	it('should get no users when storage is empty', async () => {
		const storage = usersStorage.getUsers();
		assert.deepEqual(storage, []);
	});

	// post user, return updated
	it('should create an user and update', async () => {
		usersStorage.addUser({ firstName: 'Victor', lastName: 'Hugo' });
		const storage = usersStorage.getUsers();
		const result = [{ id: 0, firstName: 'Victor', lastName: 'Hugo' }];
		assert.deepEqual(storage, result);
	});
});
