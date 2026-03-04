import type { Request, Response } from 'express'
import type { THttpResponse } from '../types/types.js'
import config from '../config/config.js'
import { EApplicationEnvironment } from '../constant/application.js'

export default (req: Request, res: Response, statusCode: number, message: string, data: unknown = null): void => {
    const response: THttpResponse = {
        success: true,
        statusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        },
        message,
        data
    }

    //log
    // eslint-disable-next-line no-console
    console.info(`CONTROLLER_RESPONSE`, {
        meta: response
    })

    //for Production
    if (config.ENV === EApplicationEnvironment.PRODUCTION) {
        delete response.request.ip
    }
    res.status(statusCode).json(response)
}
