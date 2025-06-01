'use client';
import { useState } from 'react';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    // メニューが開いていたら閉じる、閉じていたら開ける
    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <header className="fixed top-0 left-0 w-full bg-gray-200 shadow-md z-50">
            {/* ナビゲーションバー本体 */}
            <nav className="h-8 flex items-center justify-between px-2">
                {/* ハンバーガーアイコン */}
                <button onClick={toggleMenu} className="text-sm">
                    {isOpen ? "✕" : "☰"}
                </button>
                {/* ロゴ中央 */}
                <h1 className="text-base font-bold text-gray-800">めておらを応援するステラ</h1>
                {/* ロゴを中央にするために右側のスペースを開けておく */}
                <div className="" />
            </nav>

            {/* メニューオープン時 */}
            {isOpen && (
                <div className="bg-gray-100 border-t border-gray-300 text-center">
                    <ul className="py-2 space-y-2">
                        <li><a href="/" className="block text-gray-600 hover:underline">トップ</a></li>
                        <li><a href="#" className="block text-gray-600 hover:underline">プロフィール</a></li>
                        <li><a href="/songs" className="block text-gray-600 hover:underline">歌リスト</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
}