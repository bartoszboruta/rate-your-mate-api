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
  .get(Users.show)

export default router
