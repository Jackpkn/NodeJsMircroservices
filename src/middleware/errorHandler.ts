// custom error class 
class APIError extends Error {
  public statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, APIError.prototype); // Ensure correct prototype chain
  }
}
const asyncHandler = (fn: any) => (req: any, res: any, next: any) => {
    Promise.resolve(fn(req, res, next)).catch(next);
}
const globalErrorHandler = (err: any, req: any, res: any, next: any) => {
    console.error(err.stack);
    if (err instanceof APIError) {
        res.status(err.statusCode).json({ message: err.message });
    } else {
        res.status(500).json({ message: 'Something went wrong' });
    }
}
export default APIError;