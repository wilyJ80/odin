#!/usr/bin/env node

import pg from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
	id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	username VARCHAR ( 255 )
);

INSERT INTO usernames (username)
VALUES
	('Rich'),
	('David'),
	('Ada');
`;

const init = (async () => {
	console.log('Seeding...');
	/** @type {import('pg').Client} */
	const client = new pg.Client({
		connectionString: `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`
	});
	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log('done');
})();
