import mongoose from "mongoose";

const Schema = mongoose.Schema;

const roleSchema = new Schema({
	role_name: { type: String, required: true },
});

const roleModel = mongoose.model("Roles", roleSchema);

export default roleModel;
