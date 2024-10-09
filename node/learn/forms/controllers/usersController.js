import { usersStorage } from "../storages/usersStorage.js";

class UsersController {
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
		const { firstName, lastName } = req.body;
		usersStorage.addUser({ firstName, lastName });
		res.redirect('/');
	}
};

export const usersController = new UsersController();
