// src/middlewares/globalErrorHandler.ts
import { isCelebrateError } from 'celebrate';
import { NextFunction, Request, Response } from 'express';
import APIError from '../errors/APIError';

const globalErrorHandler = (
  err: APIError | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(`[${new Date().toISOString()}] ${err.stack}`);

  // Handle validation errors from celebrate/joi
  if (isCelebrateError(err)) {
    const validationError = Array.from(err.details.values())[0];
    return res.status(400).json({
      message: validationError.message,
    });
  }

  if (err instanceof APIError && err.isOperational) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // Handle unexpected errors
  res.status(500).json({
    success: false,
    message: 'An unexpected error occurred. Please try again later.',
  });
};

export default globalErrorHandler;
