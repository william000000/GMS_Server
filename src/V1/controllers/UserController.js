import { newRecord } from '../services/userService';
import { hashPassword } from '../helpers/hashPassword';
import User from '../models/user/users.model';
import Garages from '../models/user/garage.model';
import responseHandler from '../helpers/responseHandler';
import jwt from 'jsonwebtoken';
import roles from '../models/user/role.model';
import { findByInput } from '../services/userService';

class UserController {
  static async registerGarage(req, res) {
    try {
      req.body.role_id = 1; // Default role_id 1 as the owner of a garage
      req.body.password = await hashPassword(req);
      
      const findRole = await findByInput(roles, { role_name: 'Super Admin' });
      const superAdminId = await findRole.map((i) => i._id);
      console.log("find role====", superAdminId);
			
      const newUser = await newRecord(User, req.body);

      const newOwnerOfTheGarage = newUser.map((item) => {
        return {
          owner_id: item._id,
          phoneNumber: item.phoneNumber,
          role_id: item.role_id
        };
      });
      console.log("garage object-===", newOwnerOfTheGarage);
      await newRecord(Garages, Object.assign({}, newOwnerOfTheGarage)['0']);

      const { __v, role_id, password, ...data } = newUser[0]._doc;
      const token = jwt.sign(data, process.env.JWT_KEY);

      responseHandler(res, 'User created successfully', 201, token);
    } catch (err) {
      responseHandler(res, err.message, 500);
    }
  }
}
export default UserController;
