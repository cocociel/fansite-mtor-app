import React from 'react';
import SongPanel from './SongPanel';
import { convertToJapaneseName } from '../utils/artistConverter';

interface Song {
  title: string;
  artists: string[];
  url: string;
  original: boolean;
  postDate: Date;
}

interface SongPanelListProps {
  songs: Song[];
}

export const SongPanelList: React.FC<SongPanelListProps> = ({ songs }) => {
  return (
    <ul className="space-y-2">
      {songs.map((song, index) => (
        <SongPanel
          key={index}
          title={song.title}
          artists={song.artists.map(convertToJapaneseName).join(', ')}
          url={song.url}
          original={song.original}
          postDate={song.postDate}
        />
      ))}
    </ul>
  );
}; 