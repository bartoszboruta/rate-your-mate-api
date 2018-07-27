import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import router from './routes'
import dbConnect from './config/db/connect'

dotenv.config()
dbConnect()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1', router)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.info('Server is running on ' + PORT)
})
