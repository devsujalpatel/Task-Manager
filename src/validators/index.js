import { body } from "express-validator";

const userRegistrationValidator = () => {
	return [
		body("email")
			.trim()
			.notEmpty()
			.withMessage("Email is required")
			.isEmail()
			.withMessage("Email is invalid"),
		body("username")
			.trim()
			.notEmpty()
			.withMessage("Username is required")
			.isLength({ min: 3 })
			.withMessage("Username cannot be atleast 3 digits")
			.isLength({ min: 13 })
			.withMessage("Username cannot not be greater than 13 digits"),
		body("password")
			.trim()
			.notEmpty()
			.withMessage("Password cannot not be empty")
			.isLength({ min: 8 })
			.withMessage("Password cannot be atleast 8 digits")
			.isLength({ min: 20 })
			.withMessage("Username cannot not be greater than 20 digits")
			.matches(/[A-Z]/)
			.withMessage("Password must contain at least one capital letter")
			.matches(/^(?=.*[^\w\s]).*$/)
			.withMessage("Password must contain at least one special character"),
	];
};

const userLoginValidator = () => {
	return [
		body("email")
			.trim()
			.notEmpty()
			.withMessage("Email is required")
			.isEmail()
			.withMessage("Email is invalid"),
		body("password")
			.trim()
			.notEmpty()
			.withMessage("Password cannot not be empty")
			.isLength({ min: 8 })
			.withMessage("Password cannot be atleast 8 digits")
			.isLength({ min: 20 })
			.withMessage("Username cannot not be greater than 20 digits")
			.matches(/[A-Z]/)
			.withMessage("Password must contain at least one capital letter")
			.matches(/^(?=.*[^\w\s]).*$/)
			.withMessage("Password must contain at least one special character"),
	];
};

export { userRegistrationValidator, userLoginValidator };
