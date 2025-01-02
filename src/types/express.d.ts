import 'express';
declare global {
    namespace Express {
        export interface Request {
            timeStamp?: string;
        }
    }
}