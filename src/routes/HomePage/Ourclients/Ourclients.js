import React from 'react'
import './Ourclients.css'
import img1 from '../../../Assets/Images/image 8.png'


import ClientImage1 from '../../../Assets/Images/ClientsHomelist/Group 18427.png'
import ClientImage2 from '../../../Assets/Images/ClientsHomelist/Group 18429.png'
import ClientImage3 from '../../../Assets/Images/ClientsHomelist/Group 18430.png'
import ClientImage4 from '../../../Assets/Images/ClientsHomelist/Group 18431.png'
import ClientImage5 from '../../../Assets/Images/ClientsHomelist/Group 18432.png'
import ClientImage6 from '../../../Assets/Images/ClientsHomelist/Group 18433.png'
import ClientImage7 from '../../../Assets/Images/ClientsHomelist/Group 18434.png'
import ClientImage8 from '../../../Assets/Images/ClientsHomelist/Group 18435.png'
import ClientImage9 from '../../../Assets/Images/ClientsHomelist/Group 18436.png'
import ClientImage10 from '../../../Assets/Images/ClientsHomelist/Group 18437.png'
import ClientImage11 from '../../../Assets/Images/ClientsHomelist/Group 18438.png'
import ClientImage12 from '../../../Assets/Images/ClientsHomelist/Group 18439.png'



import { Box,Button } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom'



function Ourclients() {
  return (
    <div className='Ourclients-home'>
      <div className='Ourclients-home-heading'>
       <div className='Ourclients-heading-first'>
         <h2>Our Clients</h2>
       </div>
       <div className='Ourclients-heading-btn' >
       <Box>
       <Link to="/clients" style={{textDecoration:"none"}} >
       <Button
            variant="outlined"
            sx={{
              border: '2px solid white',
              color: 'white',
              width: '210px',
              height: '50px',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#fff',
                color:"#000",
                border:"#fff" // Set the hover background color to transparent
              },
            }}
          >
            View All Clients <ArrowOutwardIcon />
          </Button>
       </Link>
          
        </Box>
        
       </div>
      </div>
      <div className='Ourclients-home-list' >
        <div className='clients' >
        <img src={ClientImage1} alt="" />
        </div>
        <div className='clients'>
        <img src={ClientImage5} alt="" />

        </div>
        <div className='clients' >
        <img src={ClientImage3} alt="" />
        </div>
        <div className='clients'>
        <img src={ClientImage4} alt="" />
        </div>
        <div className='clients' >
        <img src={ClientImage6} alt="" />


        </div>
        <div className='clients'>
        <img src={ClientImage9} alt="" />

        </div>
        <div className='clients client-11' >
        <img src={ClientImage8} alt="" />

        </div>
        <div className='clients client-12'>
        <img src={ClientImage2} alt="" />

        </div>
        <div className='clients client-13' >
        <img src={ClientImage10} alt="" />


        </div>
        <div className='clients client-14'>
        <img src={ClientImage11} alt="" />


        </div>
        <div className='clients client-15' >
        <img src={ClientImage12} alt="" />

        </div>
        <div className='clients client-16' >
        <img src={ClientImage7} alt="" />


        </div>
      </div>
    </div>
  )
}

export default Ourclients
