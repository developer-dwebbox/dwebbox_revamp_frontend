import * as React from 'react';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import HamburgerIcon from "../../../src/Assets/Images/Icons/Group 3717.png"
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import './Navbar.css';
import { Link } from 'react-router-dom';
import CloseCustonbtn from '../../../src/Assets/Images/CrossIcon.png'

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)} sx={{ color: 'white' }}> <div className='menu-button-div' style={{textTransform:"capitalize"}}  >Menu</div> <img  src={HamburgerIcon} width="30px" alt="" /> </Button>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Slide} // Add Slide as TransitionComponent
        sx={{ '& .MuiDrawer-paper': { transition: 'width 1s ease' } }} // Smooth transition for drawer width
      >
        <div className='drawer-links'>
          <Button onClick={() => setOpen(false)} sx={{position: 'absolute', top: '25px', right: '15px', color: 'black' }}>
            <img src={CloseCustonbtn} alt="" width="60%" />
          </Button>
          <p>Menu</p>
        <Link  style={{textDecoration:"none" ,color:"#181818" }}  to="/portfolio"> <h6 className='nav-menu-inside-links nav-links-anchor' >Portfolio</h6></Link>
        <Link  style={{textDecoration:"none" ,color:"#181818" }}  to="/ourservice" > <h6 className='nav-menu-inside-links nav-links-anchor'  >Services</h6> </Link>
        <Link  style={{textDecoration:"none" ,color:"#181818" }}  to="/ourservice" > <h6 className='nav-menu-inside-links nav-links-anchor'  >Clients</h6> </Link>
        <Link  style={{textDecoration:"none" ,color:"#181818" }} className='insideslider-links nav-links-anchor'  to="/aboutus" > <h6>About Us</h6> </Link>
        <Link style={{textDecoration:"none" ,color:"#181818" }} className='insideslider-links nav-links-anchor'  to="/contactus" ><h6>Contact Us</h6></Link>
        <Link style={{textDecoration:"none" ,color:"#181818" }} className='insideslider-links nav-links-anchor'  to="/ourteam"><h6>Our Team</h6></Link>
          <Link  style={{textDecoration:"none" ,color:"#181818" }}  className='insideslider-links nav-links-anchor'   to="/blogs" ><h6>Blogs</h6></Link>
         
          <p className='getInTouch-p'>GET IN TOUCH</p>
          <p className='connectdwb-p'>connect@dwebbox.com</p>
        </div>
      </Drawer>
    </div>
  );
}
