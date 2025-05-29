import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './utils/db';
import songRouter from './routes/song';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// トップページ
app.get('/', (req, res) => {
    res.send('open top-page');
});

// ソングページ
app.use('/song', songRouter);

// DB起動
connectDB();

// サーバ起動確認
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});