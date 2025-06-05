'use client';

import { useEffect, useState } from 'react';
import { TagButton } from '../components/TagButton';
import { MEMBERS } from '../constants/Members';
import SongPanel from '../components/SongPanel';

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
        <main className="p-2 bg-gray-100 h-screen">
            <h2 className="text-base font-bold">歌リスト</h2>
            <p className="text-sm mb-2">めておらが歌っている曲をまとめています</p>
            <div className="flex flex-wrap">
                <TagButton name={"#" + MEMBERS['MTOR'].name} color={MEMBERS['MTOR'].color} />
                <TagButton name={"#" + MEMBERS['SHION'].name} color={MEMBERS['SHION'].color} />
                <TagButton name={"#" + MEMBERS['LAPIS'].name} color={MEMBERS['LAPIS'].color} />
                <TagButton name={"#" + MEMBERS['LIGHT'].name} color={MEMBERS['LIGHT'].color} />
                <TagButton name={"#" + MEMBERS['MELT'].name} color={MEMBERS['MELT'].color} />
                <TagButton name={"#" + MEMBERS['MIKASA'].name} color={MEMBERS['MIKASA'].color} />
                <TagButton name={"#" + MEMBERS['ROSE'].name} color={MEMBERS['ROSE'].color} />
            </div>
            <hr className="mt-4 mb-2" />
            <ul className="space-y-2">
                {songs.map((song, index) => (
                    <SongPanel title={song.title} artists={song.artists.join(', ')} />
                ))}
            </ul>
        </main>
    );
}