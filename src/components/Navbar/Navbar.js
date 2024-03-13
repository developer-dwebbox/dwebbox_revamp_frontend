import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from '../../../src/Assets/Images/logo.svg';
import './Navbar.css'
import AnchorTemporaryDrawer from './AnchorTemporaryDrawer';
import { NavLink,Link } from 'react-router-dom';

function Navbar() {
  return (
    <Box
      className='navbar'
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0px 60px',
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
      <Box className='nav-links' sx={{ width: '35%'}}>
        <NavLink to="/portfolio" style={{ textDecoration: 'none',color:"#FFFFFF",fontFamily:"Epilogue",fontWeight:"500" }}  ><Typography sx={{fontFamily:"Epilogue"}} className='typo-links' variant="body1">Portfolio</Typography></NavLink>
        <NavLink style={{ textDecoration: 'none',color:"#FFFFFF",fontFamily:"Epilogue",fontWeight:"500" }} to="/ourservice" >  <Typography sx={{fontFamily:"Epilogue"}}  className='typo-links'  variant="body1">Services</Typography></NavLink>
        <NavLink  to="/clients"  style={{ textDecoration:"none", fontFamily:"Epilogue",color:"#FFFFFF",fontWeight:"500"}} ><Typography  sx={{fontFamily:"Epilogue"}} className='typo-links'  variant="body1">Clients</Typography></NavLink>
        
      </Box>
      <Box className='nav-menu-btn'>
        <AnchorTemporaryDrawer/>
      </Box>
     
    </Box>
  );
}

export default Navbar;
