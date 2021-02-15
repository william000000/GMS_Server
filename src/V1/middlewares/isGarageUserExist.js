import { findByInput } from "../services/userService";
import User from "../models/user/users.model";
import responseHandler from "../helpers/responseHandler";
export const isGarageUserExist = async (req, res, next) => {
	try {
		const { email, phoneNumber } = req.body;
		const isEmailExist = await findByInput(User, { email });
		const isTelExist = await findByInput(User, { phoneNumber });
		if (isEmailExist.length > 0 || isTelExist.length > 0) {
			return responseHandler(
				res,
				`The User with this address '${
					isEmailExist.length > 0
						? isEmailExist.map((i) => i.email)
						: isTelExist.map((i) => i.phoneNumber)
				}' is already exists`,
				409
			);
		}
		next();
	} catch (error) {
		responseHandler(res, error.message, 500);
	}
};
