import mongoose from 'mongoose'

/**
 * Event Schema
 */
const Schema = mongoose.Schema
const EventSchema = new Schema({
  placeId: {
    type: Schema.Types.ObjectId,
    ref: 'Place',
    required: true,
    index: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  beginsAt: {
    type: Date,
    required: true,
  },
})

export default mongoose.model('Event', EventSchema)
