import express from 'express';
import { Song } from '../models/song';

const router = express.Router();

// 仮の歌リスト
const songs = [
    { title: 'SIX Kick Ass', artist: ['めておら'], original: true },
    { title: 'fake face dance music', artist: ['ロゼ'], original: false },
    { title: 'Want You', artist: ['ロゼ', '明雷らいと'], original: true }
];

// GET /song parametersなし
router.get('/song', async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    } catch (err) {
        res.status(500).json({
            error: '曲リストを取得できませんでした。'
        });
    }
});

export default router;

