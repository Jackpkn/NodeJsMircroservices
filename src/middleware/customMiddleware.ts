import { NextFunction, Request, Response } from "express";

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const timeStamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const userAgent = req.get('User-Agent') || '';
  console.log(`${timeStamp} | ${method}:${url} | ${userAgent}`);
    next();
}
const addTimeStamp = (req: Request, res: Response, next: NextFunction) => {
    req.timeStamp = new Date().toISOString();
    next();
}

export { addTimeStamp, requestLogger };
