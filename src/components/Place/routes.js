import { Router } from 'express'

import Places from './controller'

const router = Router()

router
  .route('/')
  .get(Places.index)
  .post(Places.create)

export default router
