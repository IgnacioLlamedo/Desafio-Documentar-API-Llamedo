import { logger } from "../utils/logger.js";

export const loggerInRequest = async(req, res, next) => {
    req.logger = logger
    await req.logger.info(`${req.method} in ${req.url} - ${new Date().toLocaleTimeString()}`)
    next()
}