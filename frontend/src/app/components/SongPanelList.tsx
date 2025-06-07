import React from 'react';
import SongPanel from './SongPanel';

interface Song {
  title: string;
  artists: string[];
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
          artists={song.artists.join(',')}
        />
      ))}
    </ul>
  );
}; 