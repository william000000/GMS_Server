import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	telephone: { type: Number, required: true },
	role_id: { type: Number, required: true }, 
	garage_id: { type: Number, required: true }
});

const userModel = mongoose.model("Users", userSchema);

export default userModel;