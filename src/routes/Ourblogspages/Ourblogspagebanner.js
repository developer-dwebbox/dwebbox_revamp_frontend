import React from 'react';
import { Box,Typography,Container, CardMedia, Card, CardActionArea } from '@mui/material';
import BlogImage from '../../../src/Assets/Images/BlogsImage/BlogsImage.png'


function Ourblogspagebanner() {
  return (
    <div>
       <Box sx={{ width: "100%", background: "#181818" }} >
        <Container component="main" sx={{ pt: 10,pb:10, background: "#181818"}}>
        <Box>
            <img src={BlogImage} width= "100%" alt="" />
          </Box>
          <Typography paragraph 
          sx={{ 
          color: "#ffffff",
          marginTop:"5vh",
          fontSize:"20px",
          fontFamily:"DM Sans_18pt-ExtraLight" ,
          '@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
                fontSize: '18px',
              },
          }} >
                       <span style={{ fontSize: ' 280%', fontWeight:"700", lineHeight: '30px',padding:"2px 3px",float:"left",marginTop:"3vh",color:"#F17C24"}}>A</span>  new report said earlier this week that Apple is working on a   
         brand new laptop. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air.
new report said earlier this week that Apple is working on a brand new laptop. Apple plans to release a 15-inch MacBook Air in 2023, a first for the Air series. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air.
However, Apple might not include it in the Air series when it launches it. As for the notebook’s release date, the 15-inch MacBook isn’t coming soon. It’ll get a late 2023 release at best, according to the new claims.
          </Typography>
         

          <Typography variant='h3' 
          sx={{ 
          color: "#ffffff",
          fontSize:"24px",
          marginTop:"5vh",
          fontWeight:"600",
          marginBottom:"3vh",
          fontFamily:"Epilogue",
          '@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
                fontSize: '20px',
              },
          }} >
         What sizes do MacBook Airs come in?
          </Typography>

          <Typography paragraph 
          sx={{ 
          color: "#ffffff",
          fontSize:"20px",

          fontFamily:"DM Sans_18pt-ExtraLight" ,
          '@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
                fontSize: '18px',
              },
          }} >
       Apple currently sells only one MacBook Air size. The laptop comes in a 13-inch version that matches the pre-2021 13-inch MacBook Pro size. Previously, Apple sold an 11-inch MacBook Air, but the company discontinued that model in 2017.
          </Typography>
         
<Box sx={{height:"90vh",width:"100%", display:"flex",marginTop:"10vh",justifyContent:"space-between",flexWrap:"wrap"}} >
<Card sx={{ maxWidth: 560,borderRadius:0,background:"#181818",boxShadow: 'none',}}>
              <CardMedia
                component="img"
                image={BlogImage}
                alt="green iguana"
              />
            </Card>
            <Card sx={{ maxWidth: 560,borderRadius:0,boxShadow: 'none',background:"#181818" }}>
              <CardMedia
                component="img"
                image={BlogImage}
                alt="green iguana"
              />
            </Card>
</Box>

        </Container>
      </Box>
    </div>
  )
}

export default Ourblogspagebanner
