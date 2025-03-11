import express from "express";
import fs from "fs";
import winston from "winston";

const app = express();
app.use(express.json());

const port = 7771;
const sightingsFile = "./sightings.txt";

// Winston Logger Tanımlama
const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(), // Zaman damgası ekle
        winston.format.json() // JSON formatında log kaydet
    ),
    transports: [
        new winston.transports.Console(), // Konsola log yaz
        new winston.transports.File({ filename: "logs/app.log" }) // Dosyaya log yaz
    ],
});

// POST: Yeni gözlem ekle (sadece text olarak)
app.post("/", (req, res) => {
    try {
        const sighting = req.body;

        if (!sighting.species) {
            logger.warn("POST request missing species field");
            return res.status(400).send("Species name is required!");
        }

        const dateString = new Date().toISOString().split("T")[0];
        const newSightingString = `${dateString},${sighting.species}\n`;

        fs.appendFileSync(sightingsFile, newSightingString);

        logger.info(`New sighting added: ${newSightingString.trim()}`);
        res.send("Sighting added!");

    } catch (error) {
        logger.error("Error writing to file", { error: error.message });
        res.status(500).send("Error writing to file.");
    }
});

// Sunucuyu başlat ve log kaydet
app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
});
