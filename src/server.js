import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import passport from 'passport'
import passportJWT from 'passport-jwt'
import morgan from 'morgan'
import expressValidation from 'express-validation'

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
// app.use(morgan('dev'))

app.use(passport.initialize())
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'hash',
    },
    function(jwtPayload, cb) {
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
app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    return res.status(err.status).json(err)
  }
  return res.status(500)
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.info('Server is running on ' + PORT)
})
