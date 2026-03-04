import app from './app.js'
import config from './config/config.js'

const server = app.listen(config.PORT)

;(() => {
    try {
        // eslint-disable-next-line no-console
        console.info(`Server is Start`, {
            meta: {
                port: config.PORT,
                env: config.ENV
            }
        })
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`Server is Failed to Start`, { meta: { error } })

        server.close((error) => {
            // eslint-disable-next-line no-console
            console.error(`Server is Failed to Close`, { meta: { error } })
            process.exit(1)
        })
    }
})()
