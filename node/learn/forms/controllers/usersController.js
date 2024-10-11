import { usersStorage } from "../storages/usersStorage.js";
import { body, validationResult } from "express-validator";

class UsersController {
	constructor() {
		this.alphaErr = 'must only contain letters.';
		this.lengthErr = 'must be between 1 and 10 characters.';
	}

	validateUser() {
		return [body('firstName').trim()
			.isAlpha().withMessage(`First name ${this.alphaErr}`)
			.isLength({ min: 1, max: 10 }).withMessage(`First name ${this.lengthErr}`),
		body('lastName').trim()
			.isAlpha().withMessage(`Last name ${this.alphaErr}`)
			.isLength({ min: 1, max: 10 }).withMessage(`Last name ${this.lengthErr}`)
		];
	}

	/**
	 * @param {import('express').Request} req 
	 * @param {import('express').Response} res 
	*/
	usersListGet(req, res) {
		res.render("index.html", {
			title: 'User list',
			users: usersStorage.getUsers(),
		});
	}

	/**
	 * @param {import('express').Request} req 
	 * @param {import('express').Response} res 
	*/
	usersCreateGet(req, res) {
		res.render('createUser.html', {
			title: "Create user",
		});
	}

	/**
	 * @param {import('express').Request} req 
	 * @param {import('express').Response} res 
	*/
	usersCreatePost(req, res) {
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
};

const usersController = new UsersController();

export const usersListGet = usersController.usersListGet.bind(usersController);
export const usersCreateGet = usersController.usersCreateGet.bind(usersController);
export const usersCreatePost = [
	usersController.validateUser(),
	usersController.usersCreatePost.bind(usersController)
];
