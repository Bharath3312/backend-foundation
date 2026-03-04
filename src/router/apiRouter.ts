import { Router } from 'express'

const router = Router()
import apiController from '../controller/apiController.js'

router.route('/self').get(apiController.self)

export default router
