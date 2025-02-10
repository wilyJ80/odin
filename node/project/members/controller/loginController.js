import passport from 'passport';

const LoginController = class {

	/**
	 * @param {import('express').Request} req 
	 * @param {import('express').Response} res 
	*/
	getLogin = async (req, res) => {
		return res.render('login.html');
	}

	/**
	 * @param {import('express').Request} req 
	 * @param {import('express').Response} res 
	*/
	postLogin = async (req, res) => {
		passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/',
			failureMessage: true
		});
	}
}

export const loginController = new LoginController();
