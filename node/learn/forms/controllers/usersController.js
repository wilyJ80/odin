import { usersStorage } from "../storages/usersStorage.js";
import { body, validationResult } from "express-validator";

const alphaErr = 'must only contain letters.';
const lengthErr = 'must be between 1 and 10 characters.';

function validateUser() {
	return [body('firstName').trim()
		.isAlpha().withMessage(`First name ${alphaErr}`)
		.isLength({ min: 1, max: 10 }).withMessage(`First name ${lengthErr}`),
	body('lastName').trim()
		.isAlpha().withMessage(`Last name ${alphaErr}`)
		.isLength({ min: 1, max: 10 }).withMessage(`Last name ${lengthErr}`)
	];
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
*/
export function usersListGet(req, res) {
	res.render("index.html", {
		title: 'User list',
		users: usersStorage.getUsers(),
	});
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
*/
export function usersCreateGet(req, res) {
	res.render('createUser.html', {
		title: "Create user",
	});
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
*/
function usersCreatePostHandler(req, res) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).render('createUser.html', {
			title: "Create user",
			errors: errors.array(),
		});
	}

	const { firstName, lastName } = req.body;
	usersStorage.addUser({ firstName, lastName });
	res.redirect('/');
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
*/
export function usersUpdateGet(req, res) {
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
function usersUpdatePostHandler(req, res) {
	const user = usersStorage.getUser(req.params.id);
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).render('updateUser.html', {
			title: "Update user",
			user: user,
			errors: errors.array(),
		});
	}

	const { firstName, lastName } = req.body;
	usersStorage.updateUser(req.params.id, { firstName, lastName });
	res.redirect("/");
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
*/
export function usersDeletePost(req, res) {
	usersStorage.deleteUser(req.params.id);
	res.redirect('/');
}

export const usersCreatePost = [validateUser(), usersCreatePostHandler];
export const usersUpdatePost = [validateUser(), usersUpdatePostHandler];
