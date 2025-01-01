import cors from 'cors';
const configureCors = () => {
    return cors({
        // origin -> this is will tell that which origin is allowed to access the server
        origin: (origin, callback) => {
            const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'] // production domain];
            if (!origin || allowedOrigins.indexOf(origin) !== -1) return callback(null, true);
            else return callback(new Error('Not allowed by CORS'));
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // allowed HTTP methods
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept-Version'], // allowed HTTP headers
        exposedHeaders: ['Content-Range', 'X-Content-Range'], // headers that can be exposed
        credentials: true, // allow cookies
        preflightContinue: false,
        maxAge: 600, // in seconds cache preflight response for 10 minutes -> avoid sending preflight request for the same endpoint,
        optionsSuccessStatus: 204 // return 204 status code for successful OPTIONS requests

    });
}

export default configureCors;