import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import passport from 'passport'
import passportJWT from 'passport-jwt'

import router from './routes'
import dbConnect from './config/db/connect'
import User from './components/User/schema'

const JwtStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

dotenv.config()
dbConnect()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(passport.initialize())
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'hash',
    },
    function(jwtPayload, cb) {
      //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
      return User.findById(jwtPayload._id)
        .then(user => {
          return cb(null, user)
        })
        .catch(err => {
          return cb(err)
        })
    },
  ),
)

app.use('/api/v1', router)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.info('Server is running on ' + PORT)
})
