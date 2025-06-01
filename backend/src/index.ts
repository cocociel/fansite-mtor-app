require('dotenv').config();
import express from 'express';
import { ROUTES } from './constants/routes'
import cors from 'cors';

const mongoose = require('mongoose');
const Song = require('./models/song');
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());

// トップページ
app.get(ROUTES.TOP, (req, res) => {
    res.send('open top-page');
});

// 曲リストページ
app.get(ROUTES.SONGS, (req, res) => {
    Song.find()
        .then((data: object) => res.send(data))
        .catch((err: object) => console.log(`曲がありませんでした: ${err}`))
});

// 曲リストページ（artist指定）
const findArtist: string = 'みかさくん';
app.get(ROUTES.SONGS_FIND_BY_ARTIST, (req, res) => {
    Song.find({ artists: findArtist })
        .then((data: object) => res.send(data))
        .catch((err: object) => console.log(`${findArtist}の曲がありませんでした: ${err}`))
});


// 曲リスト作成
// 現状私が曲をINSERTすればいいので
// 定数埋めて/song-insertでGET実行すれば登録できるようにしてある
const setTitle = '';
const setArtists = [''];
app.get(ROUTES.SONGS_INS, (req, res) => {
    const song = new Song({
        title: setTitle,
        artists: setArtists,
    });

    song.save()
        .then((data: object) => res.send(data))
        .catch((err: object) => console.log(`曲[${setTitle}]が登録できませんでした: ${err}`));
});

// DB接続とサーバ起動
mongoose.connect(process.env.DB_URL)
    // DB接続ができたらサーバを起動する
    .then((res: object) => app.listen(PORT, () => {
        console.log(`サーバが起動しました: http://localhost:${PORT}`);
    }))
    .catch((err: object) => console.log(err));