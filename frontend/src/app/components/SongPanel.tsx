import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import ReactPlayer from 'react-player';

interface SongPanelProps {
  title: string;
  artists: string;
  url?: string; //動画URL
  original?: boolean;  // オリジナル曲
  postDate?: Date;  // 投稿日
}

const SongPanel: React.FC<SongPanelProps> = ({ title, artists, url, original, postDate }) => {
  const formatDate = (date: Date): string => {
    const dateConv = new Date(date);
    return dateConv.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '/');
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '480px',
        height: 'auto',
        padding: '16px',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        boxShadow: 1,
        margin: '8px 0',
      }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',  // 垂直方向の中央揃え
        justifyContent: 'space-between',  // 水平方向の両端揃え
        marginBottom: '8px'  // アーティスト名との間隔
      }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 'bold',
            wordBreak: 'break-word',
            flex: 1,  // 残りのスペースを全て使用
            marginRight: original ? '8px' : 0,  // ラベルとの間隔
          }}
        >
          {title}
        </Typography>
        {original && (
          <Chip
            label="オリジナル曲"
            size="small"
            sx={{
              backgroundColor: '#ff4081',
              color: 'white',
              fontWeight: 'bold',
              flexShrink: 0,  // ラベルのサイズを固定
            }}
          />
        )}
      </Box>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          wordBreak: 'break-word',
          marginBottom: url ? '8px' : 0,
        }}
      >
        {`${artists} ${postDate ? '-' + formatDate(postDate) + '-' : ''}`}
      </Typography>
      {url && (
        <Box sx={{ margin: '8px 0' }}>
          <ReactPlayer
            url={url}
            width="432px"
            height="243px"
            controls={true}
            light={true}
            playing={false}
          />
        </Box>
      )}
    </Box>
  );
};

export default SongPanel; 