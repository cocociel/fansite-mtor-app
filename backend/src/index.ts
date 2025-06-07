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

// 曲リストページ
app.get(ROUTES.SONGS, async (req, res) => {
    const artist = req.query.artist;
    let songs;
    if (artist) {
        songs = await Song.find({ artists: artist });
    } else {
        songs = await Song.find();
    }
    res.json(songs);
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
        .then((data: object) => console.log(data))
        .catch((err: object) => console.log(`曲[${setTitle}]が登録できませんでした: ${err}`));
});

// DB接続とサーバ起動
mongoose.connect(process.env.DB_URL)
    // DB接続ができたらサーバを起動する
    .then((res: object) => app.listen(PORT, () => {
        console.log(`サーバが起動しました: http://localhost:${PORT}`);
    }))
    .catch((err: object) => console.log(err));