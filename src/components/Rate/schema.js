import mongoose from 'mongoose'

/**
 * Rate Schema
 */
const Schema = mongoose.Schema
const Rate = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // event: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Event',
  // },
  note: { type: String },
  rate: { type: Number, min: 0, max: 5, required: true },
})

export default mongoose.model('Rate', Rate)
