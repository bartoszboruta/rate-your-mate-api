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
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('User', UserSchema)
