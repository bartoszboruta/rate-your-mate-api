import Place from './schema'

const Places = {
  index: async (req, res) => {
    try {
      const places = await Place.find({})
      res.json({ places })
    } catch (_) {
      res.status(422).send('An error occured while fetching places')
    }
  },

  create: async (req, res) => {
    try {
      const place = await Place.create({ city: 'Bielsko-Biala', type: 'orlik' })
      res.json({ place })
    } catch (_) {
      res.status(422).send('An error occured while creating place')
    }
  },
}

export default Places
