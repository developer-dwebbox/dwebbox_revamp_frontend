import React from 'react';
import { Grid, Typography } from '@mui/material';
import video from '../../../Assets/Video/Dwebbox.mp4';
import './Main.css';

function Main() {
  return (
    <Grid container className='main-dev'>
      {/* Left Section */}
      <Grid item xs={12} md={6} className='main-right'>
        <div className='heading-section'>
          <Typography variant="h1" className='heading-one'>
            We develop
          </Typography>
          <Typography variant="h1" className='heading-two' sx={{ color: 'rgb(255, 186, 83)', fontSize: '7.5rem',fontFamily:"Salgesis sans-sarif",fontWeight:"600" }}>
            digital products
          </Typography>
          <Typography variant="h1" className='heading-three'>
            from scratch
          </Typography>
        </div>
      </Grid>

      {/* Right Section */}
      <Grid item xs={12} md={6} className='main-left'>
        <div className='video-section'>
          <video className='dwb-video' src={video} width="100%" autoPlay loop muted></video>
        </div>
      </Grid>
    </Grid>
  );
}

export default Main;
