import { Router } from 'express'

import Users from './src/components/User/controller'

const router = Router()

router
  .route('/users')
  .get(Users.index)
  .post(Users.create)

router
  .route('/users/:id')
  .delete(Users.delete)
  .get(Users.show)

export default router
