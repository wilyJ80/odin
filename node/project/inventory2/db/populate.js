import pg from 'pg';
import fs from 'fs';
import path from 'path';

import dotenv from 'dotenv';
dotenv.config();

const schemaPath = path.join(import.meta.dirname, '../schema.sql');
const sql = fs.readFileSync(schemaPath, 'utf8');

(async () => {
	console.log('Seeding database...');
	const client = new pg.Client({
		host: `${process.env.POSTGRES_HOST}`,
		user: `${process.env.POSTGRES_USER}`,
		database: `${process.env.POSTGRES_DB}`,
		password: `${process.env.POSTGRES_PASSWORD}`,
		port: `${process.env.POSTGRES_PORT}`
	});
	await client.connect();
	await client.query(sql);
	await client.end();
	console.log('Done seeding database.');
})();
