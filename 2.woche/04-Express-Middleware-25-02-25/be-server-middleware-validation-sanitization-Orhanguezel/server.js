import express from 'express';
import userCheck from './middleware/userCheck.js';
import { capitalizeNames, sortBands, convertNumbers } from "./middleware/sanitizeUser.js";


const app = express();
const PORT = 5010;

app.use(express.json());
app.use(userCheck);




app.post("/validateUser", (req, res) => {
    res.json({ message: "This user is valid!" });
});

app.post("/sanitizeUser", capitalizeNames, sortBands, convertNumbers, (req, res) => {
    res.json(req.body);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });

