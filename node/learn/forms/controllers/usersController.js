import { usersStorage } from "../storages/usersStorage.js";
import { validateUser } from "./usersValidation.js";
import { validationResult } from "express-validator";

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
*/
export const usersListGet = (req, res) => {
	res.render("index.html", {
		title: 'User list',
		users: usersStorage.getUsers(),
	});
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
*/
export const usersCreateGet = (req, res) => {
	res.render('createUser.html', {
		title: "Create user",
	});
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
*/
export const usersCreatePost = [
	validateUser(),
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).render('createUser.html', {
				title: "Create user",
				errors: errors.array(),
			});
		}

		const { firstName, lastName, email, age, bio } = req.body;
		usersStorage.addUser({ firstName, lastName, email, age, bio });
		res.redirect('/');
	}
]

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
*/
export const usersUpdateGet = (req, res) => {
	const user = usersStorage.getUser(req.params.id);
	res.render("updateUser.html", {
		title: "Update user",
		user: user
	});
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
*/
export const usersUpdatePost = [
	validateUser(),
	(req, res) => {
		const user = usersStorage.getUser(req.params.id);
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).render('updateUser.html', {
				title: "Update user",
				user: user,
				errors: errors.array(),
			});
		}
		const { firstName, lastName, email, age, bio } = req.body;
		usersStorage.updateUser(req.params.id, { firstName, lastName, email, age, bio });
		res.redirect("/");
	}
]

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
*/
export const usersDeletePost = (req, res) => {
	usersStorage.deleteUser(req.params.id);
	res.redirect('/');
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const usersSearchGet = (req, res) => {
	const searchQuery = req.query.search || '';
	const users = usersStorage.getUsers();

	const filteredUsers = users.filter(user => {
		const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
		return fullName.includes(searchQuery.toLowerCase());
	});

	res.render("search.html", {
		title: 'Search results',
		users: filteredUsers,
		searchQuery: searchQuery
	});
}
