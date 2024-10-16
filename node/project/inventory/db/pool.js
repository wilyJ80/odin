import pg from 'pg';

export const pool = new pg.Pool({
	host: 'db',
	user: `${process.env.POSTGRES_USER}`,
	database: `${process.env.POSTGRES_DB}`,
	password: `${process.env.POSTGRES_PASSWORD}`,
	port: 5432
});
