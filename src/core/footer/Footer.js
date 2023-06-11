import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        minHeight: '5vh',
        justifyContent: 'center',
        backgroundColor: '#313335',
        color: 'white',
        textAlign: 'center',
        padding: 2,
      }}
    >
      <Typography>
       Copyright 2023 - 2023, Curtis Thomas and the Free API List with React contributors.
      </Typography>
    </Box>
  );
};

export default Footer;
