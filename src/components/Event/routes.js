import { Router } from 'express'
import validate from 'express-validation'

import validators from './validators'
import Events from './controller'

const router = Router()

router
  .route('/')
  .get(Events.index)
  .post(validate(validators.create), Events.create)

router.route('/:id').get(validate(validators.show), Events.show)
router.route('/:id/invite').post(validate(validators.invite), Events.invite)

export default router
