import pg from 'pg';

export const pool = new pg.Pool({
	host: `${process.env.POSTGRES_HOST}`,
	user: `${process.env.POSTGRES_USER}`,
	database: `${process.env.POSTGRES_DB}`,
	password: `${process.env.POSTGRES_PASSWORD}`,
	port: `${process.env.POSTGRES_PORT}`
});
