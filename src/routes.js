import { Router } from 'express'
import passport from 'passport'

import Users from './components/User/routes'
import Events from './components/Event/routes'
import Places from './components/Place/routes'
import Auth from './components/Auth/routes'

const router = Router()

router.use('/auth', Auth)
router.use('/users', Users)
router.use('/events', passport.authenticate('jwt', { session: false }), Events)
router.use('/places', passport.authenticate('jwt', { session: false }), Places)

export default router
