import { check } from 'express-validator';

export const signUpRules = () => {
	return [
		check("firstName", "first name should be valid").isAlpha(),
		check("lastName", "last name should be valid").isAlpha(),
		check("phoneNumber", "A valid phone number should be longer than 10 number")
			.isNumeric()
			.isLength({ min: 10, max: 10 }),
		check("email", "email should be valid").trim().isEmail(),
		check("password", "A valid password should be longer than 8").notEmpty()
	];
};
 