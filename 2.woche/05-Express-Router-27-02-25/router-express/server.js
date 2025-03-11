import express from "express";
import userRouter from "./userRouter.js"; // Doğru dosya yolu!

const app = express();
const port = 3000;

app.use(express.json());
app.use("/user", userRouter); // Router'ı ekle

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
