import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import imgone from '../../../src/Assets/Images/AboutUsBgImage/Rectangle 47.png'
import imgtwo from '../../../src/Assets/Images/AboutUsBgImage/Rectangle 48.png'



function Aboutusjourney() {
  return (
    <div>
      <Box sx={{ width: "100%", background: "#181818" }} >
        <Container component="main" sx={{
        pt: 8,
        pb:8, 
        background: "#181818",
        display:"flex",
        justifyContent:"space-between",
        '@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
                flexDirection:"column-reverse",
              },
        }}>
           <Box sx={{
            width:"40%",
            '@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
            width:"95%"
              },
           
           }} >
             <Box>
             <img src={imgtwo} alt=""  width="90%"/>
             </Box>
             <Typography paragraph 
             sx={{
              marginTop:"15vh",
              fontSize:"28px",
              color:"#ffffff",
              fontFamily:"DM Sans_18pt-ExtraLight",
              lineHeight:"42px",
              '@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
              fontSize:"14px",
              lineHeight:"20px",
              marginTop:"5vh",
              width:"90%",

              },
             }}
             >
             We value open communication and would love to hear from you. Whether you have a question, a project idea, or simply want to learn more about our services, our team at D-WebBox is here to assist you.
             </Typography>
           </Box>
           <Box sx={{
            width:"49%",
            '@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
            width:"95%"
              },
           }} >
           <Box>
              <img src={imgone} alt=""  width="90%"/>
             </Box>
             <Typography paragraph
            sx={{
              marginTop:"15vh",
              fontSize:"28px",
              color:"#ffffff",
              fontFamily:"DM Sans_18pt-ExtraLight",
              lineHeight:"42px",
              '@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
            fontSize:"14px",
            lineHeight:"20px",
            marginTop:"5vh",
            width:"90%",

              },
             }}
             >
             By unlocking boundless potential, we mean harnessing the collective power of our clients, partners, and team members. We understand that true greatness is achieved when diverse perspectives, expertise, and talents converge.
             </Typography>
             <Typography
             
             paragraph
            sx={{
              marginTop:"5vh",
              fontSize:"28px",
              color:"#ffffff",
              fontFamily:"DM Sans_18pt-ExtraLight",
              lineHeight:"42px",
              '@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
            fontSize:"14px",
            lineHeight:"20px",
            marginTop:"2vh",
            width:"90%",

              },
             }}

             >
Together, we embark on a transformative journey, breaking through limitations and exploring uncharted territories. We encourage exploration, experimentation, and taking calculated risks.
             </Typography>
             <Typography 
             
             paragraph
            sx={{
              marginTop:"5vh",
              fontSize:"28px",
              color:"#ffffff",
              fontFamily:"DM Sans_18pt-ExtraLight",
              lineHeight:"42px",
              '@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
            fontSize:"14px",
            lineHeight:"20px",
            marginTop:"2vh",
            marginBottom:"10vh",
            width:"90%",

              },
             }}

             >
It signifies our unwavering dedication to empowering our clients, partners, and team members, and embracing the limitless possibilities that arise when we unite our collective strengths and expertise.
             </Typography>
</Box>
        </Container>
      </Box>
    </div>
  )
}

export default Aboutusjourney
