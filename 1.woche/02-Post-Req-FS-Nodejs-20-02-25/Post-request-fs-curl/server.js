import express from 'express';
import fs from 'fs';

const app = express();
app.use(express.json());

const port = 3001;
const playersFilePath = './players.json';

// 📌 Eğer `players.json` dosyası yoksa, boş bir dizi ile oluştur
if (!fs.existsSync(playersFilePath)) {
    fs.writeFileSync(playersFilePath, JSON.stringify([]));
}

// GET /player - Oyuncu listesini getir
app.get('/player', (req, res) => {
    const data = fs.readFileSync(playersFilePath, 'utf-8');
    res.send(data);
});

// POST /add-player - Yeni oyuncu ekle
app.post('/add-player', (req, res) => {
    const player = req.body;
    const players = JSON.parse(fs.readFileSync(playersFilePath, 'utf-8'));

    const newPlayer = { id: players.length + 1, ...player };
    players.push(newPlayer);

    fs.writeFileSync(playersFilePath, JSON.stringify(players, null, 2));
    
    res.send("Player is added successfully!");
});

// Sunucuyu başlat
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
