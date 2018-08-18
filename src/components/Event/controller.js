import Event from './schema'

const Events = {
  index: async (_, res) => {
    try {
      const events = await Event.find({})
      res.json({ events })
    } catch (_) {
      res.status(422).send('An error occured while fetching events')
    }
  },

  create: async ({ body: { userId, placeId } }, res) => {
    try {
      const event = await Event.create({
        createdBy: userId,
        beginsAt: new Date(),
        place: placeId,
        allowedParticipantsNumber: 100,
      })
      res.json({
        event: {
          id: event.id,
        },
      })
    } catch (_) {
      res.status(422).send('An error occured while creating event')
    }
  },

  show: async ({ params: { id } }, res) => {
    try {
      const event = await Event.findById(id)
        .populate('place')
        .populate('createdBy')
      res.json({ event })
    } catch (_) {
      res.status(404).send('Event not found')
    }
  },

  invite: async ({ body: { userId }, params: { id } }, res) => {
    try {
      const event = await Event.findOneAndUpdate(
        { _id: id },
        { $addToSet: { invitedPeople: userId }, $inc: { invitedPeopleCount: 1 } },
        { safe: true, new: true },
      )
      await event.save()
      res.json({
        event: {
          id: event.id,
        },
      })
    } catch (_) {
      res.status(422).send('An error occured while creating event')
    }
  },
}

export default Events
