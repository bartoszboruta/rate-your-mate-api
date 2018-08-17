import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

/**
 * User Schema
 */
const Schema = mongoose.Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  password: {
    type: String,
    required: true,
  },
  rates: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Rate',
    },
  ],
})

UserSchema.pre('save', function(next) {
  var user = this
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function(error, salt) {
      if (error) {
        return next(error)
      }
      bcrypt.hash(user.password, salt, (error, hash) => {
        if (error) {
          return next(error)
        }
        user.password = hash
        next()
      })
    })
  } else {
    return next()
  }
})

UserSchema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(error, isMatch) {
    if (error) {
      return callback(error)
    }
    callback(null, isMatch)
  })
}

export default mongoose.model('User', UserSchema)
