import mongoose from 'mongoose';
import roles from './role.model';

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: { type: String, required: [true, 'firstName can\'t be blank'] },
  lastName: { type: String, required: [true, 'lastName can\'t be blank'] },
  email: { type: String, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, $ref: roles},
  // role: roles.roleSchema._id,
});

export default mongoose.model('users', userSchema);
