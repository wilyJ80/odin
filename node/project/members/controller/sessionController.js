import passport from 'passport';

const SessionController = class {

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

	/**
	 * @param {import('express').Request} req 
	 * @param {import('express').Response} res 
	*/
	performLogout = async (req, res, next) => {
		req.logout((err) => {
			if (err) {
				return next(err);
			}
			res.redirect('/');
		});
	}
}

export const sessionController = new SessionController();
