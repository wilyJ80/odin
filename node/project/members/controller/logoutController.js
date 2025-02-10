const LogoutController = class {

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

export const logoutController = new LogoutController();
