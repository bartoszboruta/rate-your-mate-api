import Mongoose from 'mongoose'

Mongoose.Promise = global.Promise

const connectToDb = async () => {
  try {
    await Mongoose.connect(
      process.env.DB_HOST,
      { useNewUrlParser: true },
    )
    console.info('Connected to mongo!!!')
  } catch (err) {
    console.error(err, 'Could not connect to MongoDB')
  }
}

export default connectToDb
