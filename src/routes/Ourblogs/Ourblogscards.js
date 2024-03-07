import React from 'react'
import { Box,Typography,Container, Button, Card, CardMedia} from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import BlogImageOne from '../../../src/Assets/Images/BlogsImage/Rectangle 67.png'

function Ourblogscards() {
  return (
    <div>
    <Box sx={{ width: "100%", background: "#181818" }} >
      <Container component="main" sx={{ pt: 10,pb:15, background: "#181818", display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
      <Card sx={{ maxWidth: 330,background:"none",pb:2, boxShadow: 'none',borderRadius:"0px" }}>
      <CardMedia
        sx={{ height: 380,marginBottom:"20px" }}
        image={BlogImageOne}
      />
        <Typography variant="body"
         color="#FFFFFF" 
         fontSize={24} 
         fontFamily="DM Sans18ptLight" 
         fontWeight={400}
        
        >
        Creative advertising in our life became a info noise
        </Typography>
     
     
      <Button
            variant="outlined"
            sx={{
              border: '1.2px solid white',
              color: 'white',
              width: '170px',
              height: '42px',
              borderRadius: '50px',
              marginTop:"20px",
              '&:hover': {
                backgroundColor: '#fff',
                color:"#000",
                border:"#fff" // Set the hover background color to transparent
              },
            }}
          >
            Read More <ArrowOutwardIcon />
          </Button>
      
    </Card>
    <Card sx={{ maxWidth: 330,background:"none",pb:2, boxShadow: 'none',borderRadius:"0px" }}>
      <CardMedia
        sx={{ height: 380,marginBottom:"20px" }}
        image={BlogImageOne}
      />
        <Typography variant="body"
         color="#FFFFFF" 
         fontSize={24} 
         fontFamily="DM Sans18ptLight" 
         fontWeight={400}
        
        >
        Creative advertising in our life became a info noise
        </Typography>
     
     
      <Button
            variant="outlined"
            sx={{
              border: '1.2px solid white',
              color: 'white',
              width: '170px',
              height: '42px',
              borderRadius: '50px',
              marginTop:"20px",
              '&:hover': {
                backgroundColor: '#fff',
                color:"#000",
                border:"#fff" // Set the hover background color to transparent
              },
            }}
          >
            Read More <ArrowOutwardIcon />
          </Button>
      
    </Card>
    <Card sx={{ maxWidth: 330,background:"none",pb:2, boxShadow: 'none',borderRadius:"0px" }}>
      <CardMedia
        sx={{ height: 380,marginBottom:"20px" }}
        image={BlogImageOne}
      />
       
        <Typography variant="body"
         color="#FFFFFF" 
         fontSize={24} 
         fontFamily="DM Sans18ptLight" 
         fontWeight={400}
        
        >
        Creative advertising in our life became a info noise
        </Typography>
     
     
      <Button
            variant="outlined"
            sx={{
              border: '1.2px solid white',
              color: 'white',
              width: '170px',
              height: '42px',
              borderRadius: '50px',
              marginTop:"20px",
              '&:hover': {
                backgroundColor: '#fff',
                color:"#000",
                border:"#fff" // Set the hover background color to transparent
              },
            }}
          >
            Read More <ArrowOutwardIcon />
          </Button>
      
    </Card>
    
      </Container>
    </Box>
  </div>
  )
}
export default Ourblogscards
