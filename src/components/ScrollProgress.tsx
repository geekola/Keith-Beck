import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 2000,
        bgcolor: 'rgba(255,255,255,0.1)',
      }}
    >
      <Box
        sx={{
          height: '100%',
          bgcolor: 'secondary.main',
          width: `${progress}%`,
          transition: 'width 0.1s ease-out',
        }}
      />
    </Box>
  );
};