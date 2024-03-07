import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from '../../../src/Assets/Images/logo.svg';
import './Navbar.css'
import AnchorTemporaryDrawer from './AnchorTemporaryDrawer';
import { Link } from 'react-router-dom';

function Navbar() {
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
      <Link to="/" >
      <img src={Logo} alt="" />

      </Link>
      </Box>
      <Box className='nav-links' sx={{ width: '30%'}}>
        <Link to="/portfolio" style={{ textDecoration: 'none',color:"white",fontFamily:"Epilogue",fontWeight:"500" }}  ><Typography className='typo-links' variant="body1">Portfolio</Typography></Link>
        <Link style={{ textDecoration: 'none',color:"white",fontFamily:"Epilogue",fontWeight:"500" }} to="/ourservice" >  <Typography  className='typo-links'  variant="body1">Services</Typography></Link>
        <Typography  style={{fontFamily:"Epilogue",fontWeight:"500"}} className='typo-links'  variant="body1">Clients</Typography>
      </Box>
      <Box className='nav-menu-btn'>
        <AnchorTemporaryDrawer/>
      </Box>
     
    </Box>
  );
}

export default Navbar;
