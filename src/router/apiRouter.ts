import { Router } from 'express'

import type { Router as ExpressRouter } from 'express'

const router: ExpressRouter = Router()
import apiController from '../controller/apiController.js'

router.route('/self').get(apiController.self)

export default router
