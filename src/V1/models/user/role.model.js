import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  role_name: { type: String },
});

export default mongoose.model('roles', roleSchema);
