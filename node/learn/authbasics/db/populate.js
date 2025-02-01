import { pool } from './pool.js';
import path from 'node:path';
import fs from 'node:fs';

const schemaPath = path.join(import.meta.dirname, '../schema.sql');
const schemaContent = fs.readFileSync(schemaPath, 'utf8');

await pool.query(schemaContent);
pool.end();

console.log('Done seeding database.');
