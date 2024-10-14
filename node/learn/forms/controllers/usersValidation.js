import { body } from "express-validator";

const alphaErr = 'must only contain letters.';
const lengthErr = 'must be between 1 and 10 characters.';
const emailErr = 'must match email pattern';
const ageRangeErr = 'must be between 18 and 120';
const numberErr = 'must be a number';

export const validateUser = () => {
	return [body('firstName').trim()
		.isAlpha().withMessage(`First name ${alphaErr}`)
		.isLength({ min: 1, max: 10 }).withMessage(`First name ${lengthErr}`),
	body('lastName').trim()
		.isAlpha().withMessage(`Last name ${alphaErr}`)
		.isLength({ min: 1, max: 10 }).withMessage(`Last name ${lengthErr}`),
	body('email').trim()
		.isEmail().withMessage(`Email ${emailErr}`),
	body('age').trim()
		.isNumeric().withMessage(`Age ${numberErr}`)
		.isInt({ min: 18, max: 120 }).withMessage(`Age ${ageRangeErr}`)
	];
}
