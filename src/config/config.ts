import dotenvFlow from 'dotenv-flow'

dotenvFlow.config()

export default {
    //general
    ENV: process.env.ENVIRONMENT || 'development',
    PORT: process.env.PORT || 7000,
    SERVER_URL: process.env.SERVER_URL || 'http://localhost:7000',

    //database
    DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/backend-foundation'
}
