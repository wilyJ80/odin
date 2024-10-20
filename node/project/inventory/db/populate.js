import pg from "pg";
import fs from "fs";
import path from 'path';

const schemaPath = path.join(import.meta.dirname, '../schema.sql');
const SQL = fs.readFileSync(schemaPath, 'utf8');

const seed = (async () => {
	console.log('seeding database...');
	const client = new pg.Client({
		host: `${process.env.POSTGRES_HOST}`,
		user: `${process.env.POSTGRES_USER}`,
		database: `${process.env.POSTGRES_DB}`,
		password: `${process.env.POSTGRES_PASSWORD}`,
		port: 5432
	});
	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log('done seeding database.');
})();
