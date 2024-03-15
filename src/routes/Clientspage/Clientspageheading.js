import React from 'react'
import { Box,Container,Typography } from '@mui/material'
import './Clientspage.css';

function Clientspageheading() {
  return (
    <div>
      <Box sx={{ width: "100%", background: "#181818" }} >
        <Container component="main" sx={{ pt: 8,pb:8, background: "#181818"}}>
          <Typography paragraph 
          sx={{ 
          color: "#ffffff",
          fontSize:"20px",
          fontFamily:"DM Sans_18pt-ExtraLight" ,
          '@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
                fontSize: '18px',
              },
          }} >
            <span
              style={{
                content: "''",
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "white",
                marginRight:"5px",
              }}
            ></span> Our Clients {/* Add a span with the bullet class */}
          </Typography>
          <Typography variant="h1"
           sx={{ color: "#ffffff", 
          display: 'flex', 
          alignItems: 'center',
          fontSize:"70px",
          fontFamily:"Epilogue",
          fontWeight:"600" ,
          '@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
                fontSize: '24px',
              },
          }}>
It's more than just business !
          </Typography>
          <Typography paragraph 
          sx={{
            color: "#ffffff",
          fontSize:"20px",
          fontFamily:"DM Sans_18pt-ExtraLight" ,
          marginTop:"20px"
          }}
          >
          Our clients have given us the most precious gift of all - their trust.
          </Typography>
        </Container>
      </Box>

      <div className="marqueeClients">
  <div className="marquee__contentclients scrollThree">
   <h1>OUR CLIENTS</h1>
   <h1 className='stroke-heading'>OUR CLIENTS</h1>
  </div>
  <div className="marquee__contentclients scrollThree">
  <h1>OUR CLIENTS</h1>
   <h1  className='stroke-heading'>OUR CLIENTS</h1>
  </div>
  </div>

    </div>
  )
}

export default Clientspageheading
