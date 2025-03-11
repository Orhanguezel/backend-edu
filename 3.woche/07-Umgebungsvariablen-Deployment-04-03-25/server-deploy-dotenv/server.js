import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

app.get("/weather", async (req, res) => {
  try {
    const url = `${BASE_URL}${API_KEY}`; 

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Hava durumu verisi alınamadı!" });
  }
});

app.listen(PORT, () => console.log(`🌍 Server çalışıyor: http://localhost:${PORT}`));
