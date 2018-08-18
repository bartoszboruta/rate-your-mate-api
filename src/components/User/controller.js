import User from './schema'
import Rate from '../Rate/schema'

const Users = {
  index: async (req, res) => {
    try {
      const users = await User.find({})
      res.json({ users })
    } catch (_) {
      res.status(422).send('An error occured while fetching users')
    }
  },

  create: async (req, res) => {
    try {
      const user = await User.create(req.body)
      res.json({ user })
    } catch (_) {
      res.status(422).send('An error occured while creating user')
    }
  },

  show: async (req, res) => {
    try {
      const user = await User.findById(req.params.id)
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
      res.status(422).send('An error occured while removing user')
    }
  },

  update: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.json({ user })
    } catch (_) {
      res.status(422).send('An error occured while updating user')
    }
  },

  addRate: async (req, res) => {
    try {
      const rate = await Rate.create(req.body)
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { rates: rate } },
        { safe: true, new: true },
      )
      await user.save()
      res.json({
        user,
      })
    } catch (_) {
      res.status(422).send('An error occured while rating user')
    }
  },
}

export default Users
