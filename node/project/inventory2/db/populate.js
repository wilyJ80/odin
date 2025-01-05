import Firebird from 'node-firebird';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const schemaPath = path.join(import.meta.dirname, '../schema.sql');
const sql = fs.readFileSync(schemaPath, 'utf8');

console.log('Seeding database...');
/** @type {import('node-firebird').Options} */
const options = {};
options.host = `${process.env.FB_HOST}`;
options.port = `${process.env.FB_PORT}`;
options.database = `${process.env.FB_DB}`;
options.user = `${process.env.FB_USER}`;
options.password = `${process.env.FB_PASSWORD}`;

Firebird.attach(options, (err, db) => {
	if (err) {
		console.error(err);
		return;
	}

	db.query(sql, (err, result) => {
		if (err) {
			console.error(err);
			return;
		}

		db.query('SELECT * FROM students', (err, result) => {
			if (err) {
				console.error(err);
			} else {
				console.log(result);
			}
			db.detach();
		});
	});
});

