import express from 'express';
import cors from 'cors';
import songRouter from './routes/song';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// トップページ
app.get('/', (req, res) => {
    res.send('open top-page');
});

// ソングページ
app.get('/song', songRouter);

// サーバ起動確認
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});