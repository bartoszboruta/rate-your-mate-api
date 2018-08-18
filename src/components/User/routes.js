import { Router } from 'express'
import validate from 'express-validation'

import validators from './validators'
import Users from './controller'

const router = Router()

router
  .route('/')
  .get(Users.index)
  .post(validate(validators.create), Users.create)

router
  .route('/:id')
  .delete(validate(validators.delete), Users.delete)
  .put(validate(validators.update), Users.update)
  .get(validate(validators.show), Users.show)

router.route('/:id/rate').post(Users.addRate)

export default router
