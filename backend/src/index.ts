import express from 'express';

const app = express();
const PORT = 5000;

// トップページ
app.get('/', (req, res) => {
    res.send('open top-page');
});

// サーバ起動確認
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});