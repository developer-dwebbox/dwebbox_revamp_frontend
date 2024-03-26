import React from 'react';
import { Box,Typography,Container, CardMedia, Card, CardActionArea } from '@mui/material';
import BlogImage from '../../../src/Assets/Images/BlogsImage/BlogsImage.png'

import BlogImageBigOne from '../../../src/Assets/Images/BlogsImage/image 71.png'
import BlogImagesmallOne from '../../../src/Assets/Images/BlogsImage/image 73.png'
import BlogImagesmallTwo from '../../../src/Assets/Images/BlogsImage/image 74.png'




function Ourblogspagebanner() {
  return (
    <div>
       <Box sx={{ width: "100%", background: "#181818" }} >
        <Container component="main" sx={{ pt: 10,pb:10, background: "#181818"}}>
        <Box>
            <img src={BlogImageBigOne} width= "100%" alt="" />
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
                       new way dive into the delightful world of feature prioritization, where every idea is a potential gem waiting to shine! 🌟 Picture this: a lively brainstorming session filled with a flurry of suggestions from stakeholders and users alike. But wait, amidst this sea of creativity, how does a company decide which features to prioritize for development? Ah, fear not, for we have the marvelous magic of Feature Prioritization frameworks to save the day!
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
What is rice framework?
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
The superhero of prioritization! 🦸‍♂️ With its Reach, Impact, Confidence, and Effort components, it swoops in to rescue Product Managers from the chaos. Each feature gets a RICE score, determined by a delightful formula that combines user reach, impact, confidence levels, and effort required. It's like a mathematical adventure where numbers dance to reveal the most valuable features for your product roadmap.
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
The Value vs Complexity Matrix:
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
But hold your horses, because we have more enchanting frameworks to explore! Behold, the Value vs Complexity Matrix, a simple yet powerful tool. 🎨 Imagine plotting business value against effort on a whimsical grid. The high-impact, low-effort features sparkle like gems, beckoning Product Managers to prioritize them with glee. It's like finding hidden treasure on a treasure map, guiding you to the most precious features first!
          </Typography>
         
<Box sx={{height:"90vh",width:"100%", display:"flex",marginTop:"10vh",justifyContent:"space-between",flexWrap:"wrap"}} >
<Card sx={{ maxWidth: 560,borderRadius:0,background:"#181818",boxShadow: 'none',}}>
              <CardMedia
                component="img"
                image={BlogImagesmallOne}
                alt="green iguana"
              />
            </Card>
            <Card sx={{ maxWidth: 560,borderRadius:0,boxShadow: 'none',background:"#181818" }}>
              <CardMedia
                component="img"
                image={BlogImagesmallTwo}
                alt="green iguana"
              />
            </Card>
</Box>

<Typography paragraph 
          sx={{ 
          color: "#ffffff",
          fontSize:"20px",

          fontFamily:"DM Sans_18pt-ExtraLight" ,
          '@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
                fontSize: '18px',
              },
          }} >
And what's this? A whimsical journey through Story Mapping awaits! 🗺️ Step into the shoes of your end-users as you map out their fantastical journey through your product. Bucket features along this delightful adventure, ensuring the most crucial ones shine like stars in the night sky. It's a collaborative quest where the entire team embarks on an epic journey to enhance the user experience and unlock the secrets of feature prioritization!
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
In conclusion, these quirky frameworks, along with their pals like the Kano Model and the Product Tree, are the key to unlocking the magical world of feature prioritization. 🌈 So rally your team, gather your wits, and embark on a whimsical adventure to prioritize features that will dazzle your users and enchant your company to greatness! 🚀          </Typography>

        </Container>
      </Box>
    </div>
  )
}

export default Ourblogspagebanner
