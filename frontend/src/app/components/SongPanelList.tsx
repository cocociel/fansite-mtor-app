import React from 'react';
import SongPanel from './SongPanel';
import { convertToJapaneseName } from '../utils/artistConverter';
import { Grid } from '@mui/material';

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
    <Grid
      container
      spacing={2}
      sx={{
        maxWidth: '1500px',
        margin: '0',
        justifyContent: 'flex-start',
        '@media (min-width: 1500px)': {
          maxWidth: '2000px'
        }
      }}
    >
      {songs.map((song, index) => (
        <Grid
          key={index}
          sx={{
            width: {
              xs: '100%',
              sm: 'calc(50% - 8px)',
              md: 'calc(50% - 8px)',
              lg: 'calc(33.333% - 11px)'
            },
            flexGrow: 0,
            flexShrink: 0
          }}
        >
          <SongPanel
            title={song.title}
            artists={song.artists.map(convertToJapaneseName).join(', ')}
            url={song.url}
            original={song.original}
            postDate={song.postDate}
          />
        </Grid>
      ))}
    </Grid>
  );
}; 