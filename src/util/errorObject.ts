import config from '../config/config.js'
import { EApplicationEnvironment } from '../constant/application.js'
import responseMessage from '../constant/responseMessage.js'
import type { THttpError } from '../types/types.js'
import type { Request } from 'express'

export default (error: Error | unknown, req: Request, statusCode: number) => {
    const errorObj: THttpError = {
        success: false,
        statusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        },
        message: error instanceof Error ? error.message || responseMessage.SOMETHING_WENT_WRONG : responseMessage.SOMETHING_WENT_WRONG,
        data: null,
        trace:
            error instanceof Error
                ? {
                      name: error.name,
                      stack: error.stack
                  }
                : null
    }
    //log
    // eslint-disable-next-line no-console
    console.error(`CONTROLLER_ERROR`, {
        // meta : errorObj
    })
    //for Production
    if (config.ENV === EApplicationEnvironment.PRODUCTION) {
        delete errorObj.request.ip
        delete errorObj.trace
    }
    return errorObj
}
