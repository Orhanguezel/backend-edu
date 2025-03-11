import express from 'express';
import dotenv from 'dotenv';
import { getWeather } from './weather.js';

dotenv.config();

const app = express();
const port = process.env.PORT

getWeather();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);
