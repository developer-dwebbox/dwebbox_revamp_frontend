import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Ourservice() {
  return (
    <Box
      className='ourservice'
      sx={{
        width: '100%',
        height: '50vh',
        backgroundColor: '#181818',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        className='ourservice-heading'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '90%',
          height: '12vh',
          marginTop: '2rem',
        }}
      >
        <Box className='ourservice-heading-first'>
          <Typography variant="h2" sx={{ color: 'white', fontSize: '52px', fontWeight: 400 }}>
            Our Services
          </Typography>
        </Box>
        <Box className='ourservice-btn'>
          <Button
            variant="outlined"
            sx={{
              border: '2px solid white',
              color: 'white',
              width: '170px',
              height: '50px',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#fff',
                color:"#000",
                border:"#fff" // Set the hover background color to transparent
              },
            }}
          >
            All Services <ArrowOutwardIcon />
          </Button>
        </Box>
      </Box>
      <Box className='ourservice-paragraph' sx={{ width: '90%' }}>
        <Typography variant="body1" sx={{fontFamily:" DM Sans18ptLight", color: 'white', fontSize: '30px', fontWeight: 250, lineHeight: '35px',width:'67%' }}>
          From the initial stages of understanding your requirements to the final implementation, we guide you every step
          of the way.
        </Typography>
      </Box>
    </Box>
  );
}

export default Ourservice;
