import express from "express";
import connect from "./utils/connect.js";  // Bağlantı fonksiyonunu içe aktar
import studentRouter from "./router/studentRouter.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/students", studentRouter);

// **MongoDB bağlantısını beklemeden server'ı başlatma!**
connect().then(() => {
    app.listen(PORT, () => {
        console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
}).catch(error => {
    console.error("❌ MongoDB Bağlantı Hatası:", error);
});
