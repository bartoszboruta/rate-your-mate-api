import { Router } from 'express'

import Users from './controller'

const router = Router()

router
  .route('/')
  .get(Users.index)
  .post(Users.create)

router
  .route('/:id')
  .delete(Users.delete)
  .put(Users.update)
  .get(Users.show)

router.route('/:id/rate').post(Users.addRate)

export default router
