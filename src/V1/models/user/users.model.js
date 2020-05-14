import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  telephone: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role_id: { type: Number, required: true },
  garage_id: { type: Number, required: true }
});

const userModel = mongoose.model("Users", userSchema);

export default userModel;
