import React from 'react'
import './Aboutus.css'
import { Box, Container, Typography } from '@mui/material'



function Aboutusbanner() {
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
            ></span> About Us {/* Add a span with the bullet class */}
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
Dream. Design. Digitize   
       </Typography>
          <Typography paragraph 
          sx={{
            color: "#ffffff",
          fontSize:"20px",
          fontFamily:"DM Sans_18pt-ExtraLight" ,
          }}
          >
What began as a hustle by two bold and young engineering graduates has now blossomed into full-fledged pan-India team united by the mission of enabling your digital transformation and connecting you to your customer !           </Typography>
        </Container>
      </Box>
    </div>
  )
}

export default Aboutusbanner
