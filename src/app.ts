import express from 'express'
import type { Application, Request, Response, NextFunction } from 'express'
import router from './router/apiRouter.js'
import globalErrorHandler from './middlewar/globalErrorHandler.js'
import responseMessage from './constant/responseMessage.js'
import httpError from './util/httpError.js'

const app: Application = express()
const routes = express.Router()

routes.use('/', router)
// routes.use('/',(req, res) => {
//     res.status(200).json({
//         success: true,
//         statusCode: 200,
//         request: {
//             ip: req.ip,
//             method: req.method,
//             url: req.originalUrl
//         },
//         message: 'Welcome to the API',
//         data: null
//     })
// });

app.use('/api/v1', routes)

app.use((req: Request, _: Response, next: NextFunction) => {
    try {
        throw new Error(responseMessage.NOT_FOUND('API Endpoint'))
    } catch (error) {
        httpError(next, error, req, 404)
    }
})

app.use(globalErrorHandler)

export default app
