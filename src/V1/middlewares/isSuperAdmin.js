import { findByInput } from '../services/userService';
import Users from '../models/user/users.model';
export const isSuperAdmin = async (req, res, next) => {
  try {
    const email = req.user.email;
    //I will have to check by his role_id late after the relationships has done
    const isAllowed = await findByInput(Users, { email });
    if (isAllowed.length > 0) return next();
    return res.status(403).json({ error: 'You are not super admin!' });
  } catch (error) {
    console.log('isSuperAdmin error===>', error.message);
  }
};
