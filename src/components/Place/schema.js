import mongoose from 'mongoose'

/**
 * Place Schema
 */
const Schema = mongoose.Schema
const PlaceSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  city: {
    type: String,
  },
  type: {
    type: String,
  },
})

export default mongoose.model('Place', PlaceSchema)
