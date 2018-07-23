import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import router from './routes'

dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)
app.use('/api/v1', router)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log('Server is running on ' + PORT)
})
