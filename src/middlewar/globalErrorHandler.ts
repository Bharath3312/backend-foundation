import type { NextFunction, Request, Response } from 'express'
import type { THttpError } from '../types/types.js'

export default (err: THttpError, _: Request, res: Response, __: NextFunction) => {
    res.status(err.statusCode).json(err)
}
