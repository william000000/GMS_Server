import mongoose from 'mongoose';
import Users from './users.model';

const garageSchema = new mongoose.Schema({
  owner_id: [{ type: String, $ref: Users }],
});

export default mongoose.model('garages', garageSchema);
