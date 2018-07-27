import { Router } from 'express'

import Users from './components/User/routes'
import Events from './components/Event/routes'
import Places from './components/Place/routes'

const router = Router()

router.use('/users', Users)
router.use('/events', Events)
router.use('/places', Places)

export default router
