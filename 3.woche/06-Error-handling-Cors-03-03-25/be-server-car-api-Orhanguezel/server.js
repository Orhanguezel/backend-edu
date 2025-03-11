import express from 'express';
import cors from 'cors';
import carRouter from './routes/carRouter.js';

const router = express.Router();

const app = express();
app.use(cors());

const PORT=3001;

app.use(express.json());
app.use("/cars", carRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);