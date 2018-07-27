import User from './schema'

const Users = {
  index: async (req, res) => {
    try {
      const users = await User.find({})
      res.json({ users })
    } catch (_) {
      res.status(500).send('An error occured while fetching users')
    }
  },

  create: async (req, res) => {
    try {
      const user = await User.create({ email: 'also_awesome' })
      res.json({ user })
    } catch (_) {
      res.status(500).send('An error occured while creating user')
    }
  },

  show: async (req, res) => {
    try {
      const user = await User.find({ _id: req.params.id })
      res.json({ user })
    } catch (_) {
      res.status(404).send('User not found')
    }
  },

  delete: async (req, res) => {
    try {
      await User.remove({ _id: req.params.id })
      res.json({ user: 'removed' })
    } catch (_) {
      res.status(500).send('An error occured while removing user')
    }
  },
}

export default Users
