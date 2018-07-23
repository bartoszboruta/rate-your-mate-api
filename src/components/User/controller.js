const Users = {
  index: async (req, res) => {
    res.json({ user: 'test index' })
  },

  create: async (req, res) => {
    res.json({ user: 'test create' })
  },

  show: async (req, res) => {
    res.json({ user: `${req.params.id}` })
  },

  delete: async (req, res) => {
    res.status(204).json({ user: 'test delete' })
  },
}

export default Users
