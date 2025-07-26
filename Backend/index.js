import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './Database/db.js';
import router from './Routes/userRoute.js';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDb();
})