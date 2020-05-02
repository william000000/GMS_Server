import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import responseHandler from '../helpers/responseHandler';

dotenv.config();
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) responseHandler(res, 'Please Try to login', 401);
    const verifiedToken = jwt.verify(token, process.env.JWT_KEY);
    if (verifiedToken) {
      req.user = verifiedToken;
      return next();
    }
  } catch (error) {
    responseHandler(res, error.message, 500, error);
  }
};
