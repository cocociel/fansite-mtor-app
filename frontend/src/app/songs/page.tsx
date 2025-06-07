'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'
import TagButtonGroup from '../components/TagButtonGroup';
import { SongPanelList } from '../components/SongPanelList';

type Song = {
    title: string;
    artists: string[];
    url: string;
    original: boolean;
    postDate: Date;
};

export default function SongListPage() {
    const [songs, setSongs] = useState<Song[] | null>(null);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const artists = searchParams.get('artists'); // パラメータartistsの値を取得
    const router = useRouter(); // 追加

    const handleClick = (artists: string) => {
        console.log(`ボタンクリックで実行されるURL: /songs?artists=${artists}`);
        router.push(`/songs?artists=${artists}`);
    };

    useEffect(() => {
        const url = artists
            ? `http://localhost:5000/api/songs?artists=${encodeURIComponent(artists)}`
            : `http://localhost:5000/api/songs`;

        artists
            ? console.log(`parameter[artists]: ${encodeURIComponent(artists)}`)
            : console.log(`parameter[artists]: null`);

        const fetchSongs = async () => {
            await fetch(url)
                .then(res => res.json())
                .then(data => setSongs(data))
                .catch(err => console.error('error no fetch songs: ', err))
                .finally(() => setLoading(false));
        };

        fetchSongs();
    }, [artists]);

    if (loading) return <p className="p-2">読み込み中...</p>;

    return (
        <main className="p-2 bg-gray-100 h-screen">
            <h2 className="text-base font-bold">歌リスト</h2>
            <p className="text-sm">めておらが歌っている曲をまとめています</p>
            <p className="text-sm mb-2">タグをクリックするとそのメンバーが歌っている曲一覧に更新されます</p>
            <TagButtonGroup onClick={handleClick} />
            <hr className="mt-4 mb-2" />
            {songs !== null &&
                <SongPanelList songs={songs} />
            }
        </main>
    );
}