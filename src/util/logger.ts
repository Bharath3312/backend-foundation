import winston from 'winston'
import path from 'path'
import fs from 'fs'
import config from '../config/config.js'
import { EApplicationEnvironment } from '../constant/application.js'

// 🔁 Change this later to real ENV check
const isProduction = config.ENV === EApplicationEnvironment.PRODUCTION

const logDir = path.join(process.cwd(), 'logs')

// Ensure logs folder exists (only needed in production)
if (isProduction && !fs.existsSync(logDir)) {
    fs.mkdirSync(logDir)
}

winston.addColors({
    error: 'red',
    warn: 'yellow',
    info: 'bold magenta',
    http: 'magenta',
    debug: 'white'
})

// Console format (Development)
const consoleFormat = winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(({ level, message, timestamp }) => {
        return `${level}: [${timestamp}] 
    ${message}`
    })
)

// Production JSON format
const prodFormat = winston.format.combine(winston.format.timestamp(), winston.format.errors({ stack: true }), winston.format.json())

const transports: winston.transport[] = []

if (isProduction) {
    // 🏭 Production → File only
    transports.push(
        new winston.transports.File({
            filename: path.join(logDir, 'combined.log'),
            format: prodFormat
        }),
        new winston.transports.File({
            filename: path.join(logDir, 'error.log'),
            level: 'error',
            format: prodFormat
        })
    )
} else {
    // 🧑‍💻 Development → Console only
    transports.push(
        new winston.transports.Console({
            format: consoleFormat
        })
    )
}

const logger = winston.createLogger({
    level: isProduction ? 'info' : 'debug',
    transports
})

export default logger
