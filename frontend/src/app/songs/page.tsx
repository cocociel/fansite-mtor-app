'use client';

import { useEffect, useState } from 'react';

type Song = {
    title: string;
    artists: string[];
};

export default function SongListPage() {
    const [songs, setSongs] = useState<Song[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const res = await fetch(`http://localhost:5000/songs`);
                const data = await res.json();
                setSongs(data);
            } catch (err) {
                console.error('データ取得に失敗しました', err);
            } finally {
                setLoading(false);
            }
        };

        fetchSongs();
    }, []);

    if (loading) return <p className="p-2">読み込み中...</p>;

    return (
        <main className="p-2">
            <h2 className="text-base font-bold">歌リスト</h2>
            <p className="text-sm mb-4">めておらが歌っている曲をまとめています</p>
            <ul className="space-y-2">
                {songs.map((song, index) => (
                    <li key={index} className="border p-2 rounded-md shadow">
                        <p className="font-semibold">{song.title}</p>
                        <p className="text-sm text-gray-600">{song.artists.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}