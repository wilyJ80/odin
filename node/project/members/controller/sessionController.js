import passport from 'passport';
import bcryptjs from 'bcryptjs';
import { members } from '../db/memberQueries.js';

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
	postLogin = async (req, res, next) => {
		passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/',
			failureMessage: true
		})(req, res, next);
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

	/**
	 * @param {import('express').Request} req 
	 * @param {import('express').Response} res 
	*/
	getSignup = async (req, res) => {
		return res.render('signup.html');
	}

	/**
	 * @param {import('express').Request} req 
	 * @param {import('express').Response} res 
	*/
	postSignup = async (req, res, next) => {
		try {
			const hashedPassword = await bcryptjs.hash(req.body.password, 10);
			await members.insertNewMember(req.body.email, req.body.firstname, req.body.lastname, hashedPassword);
			res.redirect('/');
		} catch (error) {
			console.log(error);
			return next(error);
		}
	}
}

export const sessionController = new SessionController();
