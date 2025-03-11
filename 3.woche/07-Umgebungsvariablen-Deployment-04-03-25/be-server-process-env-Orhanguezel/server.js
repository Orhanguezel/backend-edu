import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();
const PORT = process.env.PORT
const SERVER_NAME = process.env.SERVER_NAME;
const SERVER_CPU = process.env.SERVER_CPU;
const SERVER_URL = process.env.SERVER_URL;
const SERVER_LOG = process.env.SERVER_LOG;
console.log("Environment Variables:", process.env);


app.get('/hallo', (req, res) => {
    res.send(`
        Hallo! Ich bin ${SERVER_NAME}! Ich habe eine ${SERVER_CPU}, und meine URL lautet ${SERVER_URL}. Ich führe ein Protokoll aller Aktivitäten in ${SERVER_LOG}.
    `);
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
