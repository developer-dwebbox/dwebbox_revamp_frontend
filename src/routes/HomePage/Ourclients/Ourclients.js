import React from 'react'
import './Ourclients.css'
import img1 from '../../../Assets/Images/image 8.png'
import { Box,Button } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';



function Ourclients() {
  return (
    <div className='Ourclients-home'>
      <div className='Ourclients-home-heading'>
       <div className='Ourclients-heading-first'>
         <h2>Our Clients</h2>
       </div>
       <div className='Ourclients-heading-btn' >
       <Box>
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
        
       </div>
      </div>
      <div className='Ourclients-home-list' >
        <div className='clients' >
        <img src={img1} alt="" />
        </div>
        <div className='clients'>
        <img src={img1} alt="" />
        </div>
        <div className='clients' >
        <img src={img1} alt="" />
        </div>
        <div className='clients'>
        <img src={img1} alt="" />
        </div>
        <div className='clients' >
        <img src={img1} alt="" />
        </div>
        <div className='clients'>
        <img src={img1} alt="" />
        </div>
        <div className='clients' >
        <img src={img1} alt="" />
        </div>
        <div className='clients'>
        <img src={img1} alt="" />
        </div>
        <div className='clients' >
        <img src={img1} alt="" />
        </div>
        <div className='clients'>
        <img src={img1} alt="" />
        </div>
        <div className='clients' >
        <img src={img1} alt="" />
        </div>
        <div className='clients'>
        <img src={img1} alt="" />
        </div>
        <div className='clients' >
        <img src={img1} alt="" />
        </div>
        <div className='clients'>
        <img src={img1} alt="" />
        </div>
        <div className='clients' >
        <img src={img1} alt="" />
        </div>
        <div className='clients' >
        <img src={img1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Ourclients
