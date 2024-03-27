import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import Bgimage from '../HomePage/Bgimagesection/Bgimage'
import Navbar from '../../components/Navbar/Navbar'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import AppDevelopment from '../../../src/Assets/Images/WebDevelopment/5016 1.png'
import { experimentalStyled as styled } from '@mui/material/styles';

import ProductManagement from '../../../src/Assets/Video/ProductManagement.mp4'


import servicelogo1 from '../../../src/Assets/Images/Servicesinnerpageicons/ProductManagement/image 49.png'
import servicelogo2 from '../../../src/Assets/Images/Servicesinnerpageicons/ProductManagement/image 50.png'
import servicelogo3 from '../../../src/Assets/Images/Servicesinnerpageicons/ProductManagement/image 51.png'
import servicelogo4 from '../../../src/Assets/Images/Servicesinnerpageicons/ProductManagement/image 52.png'
import servicelogo5 from '../../../src/Assets/Images/Servicesinnerpageicons/ProductManagement/image 53.png'

const content = ["Understanding the Business", "UI/UX representation and Prototyping","Developing the product","Quality Assurance and Deployment","Website Maintenance"];


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

function Productmanagementinner() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top when the component mounts
  }, []);

  return (
    <div  style={{background:"#181818"}}>
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
Product Management
</Typography>
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

Managing Product planning and development to create products and features that customers love.   
       </Typography>
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
From idea to deployment, we provide hands-on consulting support to build your products, ensuring every step is infused with intuitive UI/UX design, creating engaging experiences that captivate users from start to finish.    
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
     Here is the five-step process we follow to create the ideal website for you to engage with your customers online:
     </Typography>
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
<video src={ProductManagement} autoPlay loop muted  style={{width:"100%", height:"100%",background:"black"}} alt="" /> 
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

export default Productmanagementinner
