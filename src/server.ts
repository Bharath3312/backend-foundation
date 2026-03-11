import app from './app.js'
import config from './config/config.js'
import logger from './util/logger.js'

const server = app.listen(config.PORT)

;(() => {
    try {
        logger.info(`Server is Start on port ${config.PORT} in ${config.ENV} Mode.`)
        logger.info('MongoDB Connection is Successful')
        logger.info('Redis Connection is Successful')
    } catch (error) {
        logger.error(`Server is Failed to Start`, { error })

        server.close((error) => {
            logger.error(`Server is Failed to Close`, { error })
            process.exit(1)
        })
    }
})()
