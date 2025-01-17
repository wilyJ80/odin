import { getAllUsernames, insertUsername, searchUsername } from "../db/queries.js";
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getUsers = async (req, res) => {
	const usernames = await getAllUsernames();
	console.log(`Usernames: ${usernames}`);
	res.send(`Usernames: ${usernames.map(user => user.username).join(', ')}`);
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const addUserGet = (req, res) => {
	res.render('create.html');
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const addUserPost = async (req, res) => {
	const { username } = req.body;
	await insertUsername(username);
	res.redirect('/');
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const searchUserGet = (req, res) => {
	res.render('search.html');
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const searchUserPost = async (req, res) => {
	const results = await searchUsername(req.body.username);
	res.render('results.html', {
		results: results
	});
}
