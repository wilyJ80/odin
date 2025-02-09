import pg from 'pg';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { pool } from './pool.js';

dotenv.config();

const schemaPath = path.join(import.meta.dirname, './schema.sql');
const sql = fs.readFileSync(schemaPath, 'utf8');

console.log('Seeding database...');
await pool.query(sql);
console.log('Done seeding database.');
await pool.end();
