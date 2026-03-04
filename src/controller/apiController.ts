import type { NextFunction, Request, Response } from 'express'
import httpResponse from '../util/httpResponse.js'
import responseMessage from '../constant/responseMessage.js'
import httpError from '../util/httpError.js'

export default {
    self: (req: Request, res: Response, next: NextFunction) => {
        try {
            throw new Error('Test Error')
            httpResponse(req, res, 200, responseMessage.SUCCESS)
        } catch (error) {
            httpError(next, error, req)
        }
    }
}
