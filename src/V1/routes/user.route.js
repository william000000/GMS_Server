import { Router } from "express";
import userController from "../controllers/UserController";
import { signUpRules } from "../validator/userInputRules";
import validationMessage from "../validator";
import { isGarageUserExist } from "../middlewares/isGarageUserExist";
import { verifyToken } from "../middlewares/verifyToken";
import { isSuperAdmin } from "../middlewares/isSuperAdmin";
const route = Router();

const { registerGarage } = userController;

route.post(
	"/signup",
	verifyToken,
	isSuperAdmin,
	signUpRules(),
	validationMessage,
	isGarageUserExist,
	registerGarage
);

export default route;
