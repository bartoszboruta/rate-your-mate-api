import { Router } from 'express'

import Events from './controller'

const router = Router()

router
  .route('/')
  .get(Events.index)
  .post(Events.create)

router.route('/:id').get(Events.show)
router.route('/:id/invite').post(Events.invite)

export default router
