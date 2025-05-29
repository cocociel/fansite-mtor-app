import express from 'express';

const router = express.Router();

// 仮の歌リスト
const songs = [
    { id: 1, title: 'SIX Kick Ass', artist: ['めておら'], original: true },
    { id: 2, title: 'fake face dance music', artist: ['ロゼ'], original: false },
    { id: 3, title: 'Want You', artist: ['ロゼ', '明雷らいと'], original: true }
];

// GET /song parametersなし
router.get('/song', (req, res) => {
    res.json(songs);
});

export default router;

