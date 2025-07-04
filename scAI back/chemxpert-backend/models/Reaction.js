import mongoose from 'mongoose';

const reactionSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  equation: { type: String, required: true },
  type: {
     type: String,
     required: true,
    enum: ['organic', 'inorganic', 'biochemical', 'industrial']
  },
  mechanism: String,
  conditions: String,
  catalyst: String,
  temperature: String,
  pressure: String,
  yield: String,
  hazards: String,
  enthalpy: String,
  deltaG: String
}, { timestamps: true });

reactionSchema.index({ name: 'text', equation: 'text' });

export const Reaction = mongoose.model('Reaction', reactionSchema);
export default mongoose.model('Reaction', reactionSchema);