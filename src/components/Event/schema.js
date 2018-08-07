import mongoose from 'mongoose'

/**
 * Event Schema
 */
const Schema = mongoose.Schema
const EventSchema = new Schema({
  place: {
    type: Schema.Types.ObjectId,
    ref: 'Place',
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  beginsAt: {
    type: Date,
    required: true,
  },
  allowedParticipantsNumber: {
    type: Number,
    required: true,
    default: 10,
  },
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      // unique: true,
    },
  ],
  participantsCount: {
    type: Number,
    default: 0,
  },
  invitedPeople: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      // unique: true,
    },
  ],
  invitedPeopleCount: {
    type: Number,
    default: 0,
  },
})

export default mongoose.model('Event', EventSchema)
