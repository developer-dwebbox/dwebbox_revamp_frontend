import * as React from 'react';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)} sx={{ color: 'white' }}> <div className='menu-button-div' >Menu</div> <DragHandleIcon sx={{ color: 'white' }} /></Button>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Slide} // Add Slide as TransitionComponent
        sx={{ '& .MuiDrawer-paper': { transition: 'width 1s ease' } }} // Smooth transition for drawer width
      >
        <div className='drawer-links'>
          <Button onClick={() => setOpen(false)} sx={{position: 'absolute', top: '15px', right: '15px', color: 'black' }}>
            <CloseIcon sx={{fontSize:"40px"}} />
          </Button>
          <p>MENU</p>
          <h2 className='nav-menu-inside-links' >Portfolio</h2>
          <Link  style={{textDecoration:"none" ,color:"#181818" }}  to="/ourservice" > <h2 className='nav-menu-inside-links'  >Services</h2> </Link>
          <h2 className='nav-menu-inside-links'  >Clients</h2>
          <h2>About Us</h2>
          <h2>Our Team</h2>
          <h2>Contact Us</h2>
          <h2>Blogs</h2>
          <p className='getInTouch-p'>GET IN TOUCH</p>
          <p className='connectdwb-p'>connect@dwebbox.com</p>
        </div>
      </Drawer>
    </div>
  );
}
