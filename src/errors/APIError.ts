// src/errors/APIError.ts
export default class APIError extends Error {
    public statusCode: number;
    public isOperational: boolean;
  
    constructor(message: string, statusCode: number, isOperational = true) {
      super(message);
      this.statusCode = statusCode;
      this.isOperational = isOperational;
  
      // Maintain the proper prototype chain for extending built-in classes
      Object.setPrototypeOf(this, new.target.prototype);
  
      // Capture stack trace for debugging
      Error.captureStackTrace(this, this.constructor);
    }
  }
  