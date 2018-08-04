import mongoose from 'mongoose'

/**
 * User Schema
 */
const Schema = mongoose.Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  rates: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Rate',
    },
  ],
})

export default mongoose.model('User', UserSchema)
