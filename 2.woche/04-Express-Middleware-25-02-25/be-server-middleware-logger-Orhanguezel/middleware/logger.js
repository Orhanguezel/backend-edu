import { appendToLogFile } from "../utils/helpers.js";

export default function logger(req, res, next) {
    const logEntry = `${req.ip} | ${req.method} | ${req.originalUrl} | ${new Date()}`;
    appendToLogFile(logEntry);
    console.log(logEntry);
    next();
  }
  