import { Router } from 'express'

import Auth from './controller'

const router = Router()

router.route('/login').post(Auth.login)

export default router
