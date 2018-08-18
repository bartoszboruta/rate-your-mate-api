import { Router } from 'express'
import validate from 'express-validation'

import validators from './validators'
import Auth from './controller'

const router = Router()

router.route('/login').post(validate(validators.login), Auth.login)

export default router
