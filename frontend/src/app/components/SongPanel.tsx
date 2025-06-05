import React from 'react';
import { Box, Typography } from '@mui/material';

interface SongPanelProps {
  title: string;
  artists: string;
}

const SongPanel: React.FC<SongPanelProps> = ({ title, artists }) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '400px',
        padding: '16px',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        boxShadow: 1,
        margin: '8px 0',
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: 'bold',
          marginBottom: '8px',
          wordBreak: 'break-word',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          wordBreak: 'break-word',
        }}
      >
        {artists}
      </Typography>
    </Box>
  );
};

export default SongPanel; 