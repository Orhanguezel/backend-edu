import express from 'express';
import userCheck from './middleware/userCheck.js';

const app = express();

// JSON Middleware (Gövdeyi JSON olarak okumak için)
app.use(express.json());

// Global Middleware'ler
app.use((req, res, next) => {
    console.log('Erste Middelware');
    next();
});

app.use((req, res, next) => {
    console.log('Zweite Middelware');
    next();
});

// Logger Middleware
app.use((req, res, next) => {
    console.log(`Req: ${req.method} ${req.url}`);
    next();
});

// GET /
app.get('/', (req, res) => {
    res.send('Hi, Hier ist GET endpoint');
});

// POST /signup
app.post('/signup', (req, res, next) => {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    console.log("Kullanıcı kaydı başarılı!");
    next(); // Burada next çağırıyoruz
}, 
(req, res) => { // Burada next ile devam eden middleware yanıt döndürüyor
   res.json({ message: "User registered successfully" });  
});



app.post('/user', userCheck, (req, res) => {
    res.json({ message: "User registered successfully" });
});

// Sunucu Başlatma
app.listen(3005, () => {
    console.log('Server is running on http://localhost:3005');
});
