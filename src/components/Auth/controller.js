import jwt from 'jsonwebtoken'

import User from '../User/schema'

const _signToken = async user =>
  await jwt.sign(user.toJSON(), process.env.SECRET, {
    expiresIn: process.env.TOKEN_EXPIRATION_TIME,
  })

const Auth = {
  login: async ({ body: { email, password } }, res) => {
    try {
      const user = await User.findOne({
        email,
      })
      await user.comparePassword(password, async (error, isMatch) => {
        if (isMatch && !error) {
          const token = await _signToken(user)
          return res.json({
            token,
          })
        }
        res.status(400).send('Wrong email or password')
      })
    } catch (_) {
      res.status(422).send('An error occured while logging in')
    }
  },
}

export default Auth
