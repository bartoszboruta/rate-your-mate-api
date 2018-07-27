import Event from './schema'

const Events = {
  index: async (req, res) => {
    try {
      const events = await Event.find({})
      res.json({ events })
    } catch (_) {
      res.status(500).send('An error occured while fetching events')
    }
  },

  create: async (req, res) => {
    try {
      const event = await Event.create({
        userId: req.body.userId,
        beginsAt: new Date(),
        placeId: req.body.placeId,
      })
      res.json({ event })
    } catch (_) {
      res.status(500).send('An error occured while creating event')
    }
  },
}

export default Events
