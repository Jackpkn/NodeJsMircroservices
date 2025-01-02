// src/middlewares/asyncHandler.ts
import { NextFunction, Request, Response } from 'express';

// A higher-order function to handle async errors in route handlers
const asyncHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
