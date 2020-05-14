import userModel from "../models/user/users.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

class UserController {
  static async signin(req, res) {
    try {
      const { telephone, email, password } = req.body;
      const data = await userModel.findOne({ $or: [{ email }, { telephone }] });
      console.log(email, telephone, password);
      console.log(data);
      console.log("model", userModel);
      if (data) {
        const decodedPassword = bcrypt.compareSync(password, data.password);
        const token = jwt.sign({ data }, process.env.JWT_KEY, {
          expiresIn: "1d",
        });
        const response = decodedPassword
          ? res.status(200).send({
              status: 200,
              message: "User successfully loggend in",
              token,
            })
          : res.status(401).send({
              status: 401,
              message: "Incorrect email/phone or password",
            });
        return response;
      }
      return res
        .status(401)
        .send({ status: 401, message: "Incorrect email, phone or password" });
    } catch ({ message }) {
      return res.status(500).send({
        status: 500,
        message: "Oops! Something is not right, please try again later.",
      });
    }
  }
}

export default UserController;
