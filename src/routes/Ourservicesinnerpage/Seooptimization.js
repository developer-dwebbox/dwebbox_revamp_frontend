import React, { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Bgimage from '../HomePage/Bgimagesection/Bgimage';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import AppDevelopment from '../../../src/Assets/Images/WebDevelopment/5016 1.png'
import { experimentalStyled as styled } from '@mui/material/styles';

import SeoOptimization from '../../../src/Assets/Video/Seo.mp4'



import servicelogo1 from '../../../src/Assets/Images/Servicesinnerpageicons/SeoImages/image 49.png'
import servicelogo2 from '../../../src/Assets/Images/Servicesinnerpageicons/SeoImages/image 50.png'
import servicelogo3 from '../../../src/Assets/Images/Servicesinnerpageicons/SeoImages/image 51.png'
import servicelogo4 from '../../../src/Assets/Images/Servicesinnerpageicons/SeoImages/image 52.png'
import servicelogo5 from '../../../src/Assets/Images/Servicesinnerpageicons/SeoImages/image 53.png'

const content = ["Understanding The Audience", "Creating Quality Content","Optimizing Content for Search Engines","Building Relationships and Authority","Monitoring and Adapting"];


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));


function Seooptimization() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top when the component mounts
  }, []);


  return (
    <div  style={{background:"#181818"}} >
    <Navbar/>
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
            ></span> Our Services {/* Add a span with the bullet class */}
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
Seo Optimization</Typography>
          <Typography variant='h2'
          sx={{ color: "#ffffff", 
          marginTop:"10vh",
          display: 'flex', 
          alignItems: 'center',
          fontSize:"42px",
          fontFamily:"Epilogue",
          fontWeight:"600" ,
          '@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
                fontSize: '24px',
              },
          }}
           >
Elevate your digital presence with precision: SEO Optimization, where visibility meets value          </Typography>
          <Typography paragraph 
          sx={{
            color: "#ffffff",
          fontSize:"24px",
          marginTop:"5vh",
          fontWeight:"250",
          fontFamily:"DM Sans_18pt-ExtraLight" ,
          width:"95%"
          }}
          >
 It's more than just a buzzword; it's a powerful tool that can elevate our online presence and drive tangible results for our business. Let's break down why SEO optimization is absolutely crucial.     
     </Typography>
     <Typography variant='h3'
      sx={{ color: "#ffffff", 
          marginTop:"10vh",
          display: 'flex', 
          alignItems: 'center',
          fontSize:"32px",
          fontFamily:"Epilogue",
          fontWeight:"600" ,
          '@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
                fontSize: '24px',
              },
          }}
      >
Unlocking Success: Mastering the five essential steps of SEO Optimization to create the perfect online presence:     </Typography>
        </Container>

        <Container component="main" sx={{ pt: 3,pb:5, 
background: "#181818",
display:"flex",
justifyContent:"space-between",
height:"80vh",
'@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
               flexDirection:"column",
               height: "130vh",
              },

}} >

<Box  sx={{background:"#ffffff",
width:"40%" ,
height:"90%",
'@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
            width: '90%',
            marginBottom:"5vh",
            height:"40%"
              },
}} >
<video src={SeoOptimization} autoPlay loop muted  style={{width:"100%", height:"100%",background:"black"}} alt="" /> 
</Box>

<Box sx={{
width:"55%",
height:"90%",
'@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
                width: '90%',
              },

}}>

<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={{ xs: 2, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }} className='inner-page-itemgrid' >
                  {[servicelogo1, servicelogo2, servicelogo3, servicelogo4, servicelogo5].map((serviceLogo, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                      <Item sx={{
                        borderRadius: "0",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        background: "#181818",
                        height: "30vh",
                        '@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
                          height: "22vh",
                          width:"111%",
                          textAlign:"center",
                        },
                      }}>
                        <img src={serviceLogo} alt={`Service Logo ${index + 1}`} style={{ maxWidth: "67px", maxHeight: "67px" }} />
                        <Typography variant="body1" sx={{
                           color: "#ffffff",fontSize:"16px",fontWeight:"600",
                        fontFamily:"Epilogue" ,
                        '@media (max-width:600px)': { // Styles for screens with a maximum width of 600px (mobile view)
                          fontSize:"12px",
                          fontWeight:"500",
                          marginTop:"1vh",
                          textAlign:"center",
                         

              },
                        
                  

                        }}>{content[index]}</Typography>

                      </Item>
                    </Grid>
        ))}
      </Grid>
    </Box>

</Box>

</Container>



      </Box>
    </div>
    <Bgimage/>
    <Footer/>
    </div>
  )
}

export default Seooptimization
