import mongoose from "mongoose";

const Schema = mongoose.Schema;

const garageSchema = new Schema({
	garage_name: { type: String, required: true },
});

const garageModel = mongoose.model("Garages", garageSchema);

export default garageModel;
