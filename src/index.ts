import dotenv from 'dotenv';
import express from 'express';
import configureCors from './config/corsConfig';
dotenv.config();

const app  = express();
const PORT = process.env.PORT || 3000;
app.use(configureCors());
// express json middleware
app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}  )