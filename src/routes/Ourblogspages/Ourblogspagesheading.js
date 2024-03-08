import React from 'react';
import { Box,Typography,Container } from '@mui/material';

function Ourblogspagesheading() {
  return (
    <div>
       <Box sx={{ width: "100%", background: "#181818" }} >
        <Container component="main" sx={{ pt: 10, background: "#181818"}}>
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
            ></span> Blogs {/* Add a span with the bullet class */}
          </Typography>
          <Typography variant="h1"
           sx={{ color: "#ffffff", 
          display: 'flex', 
          alignItems: 'center',
          fontSize:"55px",
          fontFamily:"Epilogue",
          fontWeight:"600" ,
          '@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
                fontSize: '24px',
              },
          }}>
            Creative advertising in our life became a info noise
          </Typography>
        </Container>
      </Box>
    </div>
  )
}

export default Ourblogspagesheading
