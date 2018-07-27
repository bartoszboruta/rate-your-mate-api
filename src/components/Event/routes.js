import { Router } from 'express'

import Events from './controller'

const router = Router()

router
  .route('/')
  .get(Events.index)
  .post(Events.create)

export default router
