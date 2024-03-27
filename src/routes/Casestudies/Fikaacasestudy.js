import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Bgimage from '../HomePage/Bgimagesection/Bgimage';
import { Box, Container, Typography } from '@mui/material';
import FikkaBigImage from '../../../src/Assets/Images/PortfolioImages/FikaaBigImage.png'
import FikaaFullCasestudies from '../../../src/Assets/Images/PortfolioImages/FikaaFullCasestudy.png'


function Fikaacasestudy() {
  return (
    <div>
    <Navbar/>
    <Box sx={{ width: "100%", background: "#181818" }} >
        <Container component="main" sx={{ pt: 10, 
        background: "#181818", 
         '@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
         paddingTop:"40px",
              },}}>
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
            ></span> Portfolio {/* Add a span with the bullet class */}
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
           FIKAA - Be Financially Free
          </Typography>
        </Container>
    </Box>

    <Box sx={{ width: "100%", background: "#181818" }} >
        <Container  component="main" sx={{ pt: 10,pb:10, background: "#181818"}}>
        <Box>
            <img src={FikkaBigImage} width= "100%" alt="" />
          </Box>
         
         
<Box sx={{background:"rgba(34, 34, 34, 1)",padding:"5vh",marginTop:"10vh"}} >
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
The Challenge        
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
Women's financial priorities, such as long-term security and sustainable investing, necessitate specialized services tailored to their needs. Addressing the financial literacy gap requires the provision of easily accessible educational resources. Fostering an inclusive environment devoid of biases is crucial for empowering women in financial decision-making. Trust is foundational, built upon transparent communication and robust security measures. Diverse investment options catering to varying income levels are pivotal in mitigating wealth disparities. Personalized investment recommendations and portfolio customization are indispensable for meeting individual preferences. Access to supportive networks and mentorship bolsters confidence in investing endeavors. Ensuring accessibility through user-friendly interfaces and multilingual support is essential for women from diverse backgrounds. Compliance with legal standards and advocacy for gender equality are imperative facets of the app's operation. Continuous refinement based on user feedback drives ongoing enhancement and relevance.          </Typography>
</Box>
          
          <Box sx={{background:"rgba(34, 34, 34, 1)",padding:"5vh",marginTop:"10vh"}} >
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
Approach
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
Thorough market research engages potential users to understand their financial goals, tailoring app features, investments, and educational content accordingly. Company offered a comprehensive range of educational resources enhances financial literacy, empowering women with the knowledge for informed investment decisions. Creating an inclusive environment challenges stereotypes, showcasing women's achievements in finance and encouraging participation from diverse backgrounds. Transparency is paramount, from fees to security measures, fostering trust through open communication with users. Ensuring accessibility and affordability for women of varying socioeconomic backgrounds involves flexible options and tailored products. Utilizing algorithms for personalized investment recommendations allows customization of portfolios based on individual preferences. Facilitating connections among female investors through forums and mentorship programs provides valuable support. Designing the app with accessibility features and multilingual support prioritizes diverse user needs globally. Adhering to legal standards and advocating for gender equality ensures compliance and inclusivity. Continuous feedback loops drive ongoing improvements, updating the app to meet evolving user needs and market trends.        
  </Typography>
</Box>
         

        
         

        </Container>
      </Box>

      <Box sx={{background:"#181818"}} >
        <img src={FikaaFullCasestudies} alt="" width="100%" />
      </Box>


    <Bgimage/>
    <Footer/>  
    </div>
  )
}

export default Fikaacasestudy
