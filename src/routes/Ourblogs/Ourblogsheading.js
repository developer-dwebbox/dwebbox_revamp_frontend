import React from 'react'
import { Box, Container, Typography } from '@mui/material'

function Ourblogsheading() {
  return (
    <div>
      <Box sx={{ width: "100%", background: "#181818" }} >
        <Container component="main" sx={{ pt: 10, background: "#181818"}}>
          <Typography paragraph 
          sx={{ 
          color: "#ffffff",
          fontSize:"20px",
          fontFamily:"DM Sans_18pt-ExtraLight" 
          }} >
            <span
              style={{
                content: "''",
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "white",
                marginRight:"5px"
              }}
            ></span> Blogs {/* Add a span with the bullet class */}
          </Typography>
          <Typography variant="h1"
           sx={{ color: "#ffffff", 
          display: 'flex', 
          alignItems: 'center',
          fontSize:"70px",
          fontFamily:"Epilogue",
          fontWeight:"600" 
          }}>
            Latest News.
          </Typography>
        </Container>
      </Box>
    </div>
  )
}

export default Ourblogsheading
