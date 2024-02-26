import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from '../../../Assets/Images/logo.svg';
import './Navbar.css'
import AnchorTemporaryDrawer from './AnchorTemporaryDrawer';

function Navbar() {
  const moveCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    if (cursor) {
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
    }
  };

  // Add event listener to track mouse movement
  document.addEventListener('mousemove', moveCursor);

  return (
    <Box
      className='navbar'
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0px 50px',
        backgroundColor: '#181818',
        color: 'white',
        alignItems: 'center',
        height: '100px',
      }}
    >
      <Box className='logo'>
        <img src={Logo} alt="" />
      </Box>
      <Box className='nav-links' sx={{ width: '30%'}}>
        <Typography className='typo-links' variant="body1">Portfolio</Typography>
        <Typography  className='typo-links'  variant="body1">Services</Typography>
        <Typography  className='typo-links'  variant="body1">Clients</Typography>
      </Box>
      <Box className='nav-menu-btn'>
        <AnchorTemporaryDrawer/>
      </Box>
      <div className="cursor"></div>
    </Box>
  );
}

export default Navbar;
