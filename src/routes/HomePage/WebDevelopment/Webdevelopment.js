import React  from 'react'
import './Webdevelopment.css'
import webdevimg from '../../../Assets/Images/WebDevelopment/WebDevelopment.png'
import productbranding from '../../../Assets/Images/WebDevelopment/Rectangle 59-1.png'
import uiuximg from '../../../Assets/Images/WebDevelopment/representations-user-experience-interface-design 1.png'
import productmanagementimg from '../../../Assets/Images/WebDevelopment/representations-user-experience-interface-design 1-1.png'
import socialmediaimg from '../../../Assets/Images/WebDevelopment/Rectangle 59.png'
import AppDevelopment from '../../../Assets/Images/WebDevelopment/5016 1.png'
import { Box, Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom'
import VideoMobileAppDevelopment from '../../../../src/Assets/Video/AppVideo.mp4'
import VideoWebAppDevelopment from '../../../../src/Assets/Video/WebDevelopment.mp4'
import SeoOptimization from '../../../../src/Assets/Video/Seo.mp4'
import Staffing from '../../../../src/Assets/Video/Staffing.mp4'
import ProductManagement from '../../../../src/Assets/Video/ProductManagement.mp4'

import LogoDesign from '../../../../src/Assets/Video/LogoDesign.mp4'







function Webdevelopment() {
  return (
    <div className='webdevelopment-container'>
     <div className="webdev webdevtwo">
    <div className='webdevheading'>
    <h1>App <br /> Development</h1>
           <p>Mobile applications that stick. Specifically created to augment and transform your business.</p>
           <Box>
           <Link to="/appdevelopment" style={{textDecoration:"none"}} >
           <Button
            variant="outlined"
            sx={{
              border: '2px solid white',
              color: 'white',
              width: '170px',
              height: '50px',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#000',
                color:"#fff",
                border:"#000" // Set the hover background color to transparent
              },
            }}
          >
            Learn more <ArrowOutwardIcon />
          </Button>
           </Link>
        </Box>
</div>
<div className='webdevimage'>
<video src={VideoMobileAppDevelopment} autoPlay loop muted  style={{width:"100%", height:"100%",background:"black"}} alt="" /> 

</div>
</div>
    <div className="webdev webdevone">
     <div className='webdevheading'>
           <h1>Web <br /> Developmemt</h1>
           <p>The perfect online front for your customers to experience the best of what your company offers.</p>
           <Box>
           <Link to="/webdevelopment" style={{textDecoration:"none"}} >
           <Button
            variant="outlined"
            sx={{
              border: '2px solid white',
              color: 'white',
              width: '170px',
              height: '50px',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#000',
                color:"#fff",
                border:"#000" // Set the hover background color to transparent
              },
            }}
          >
            Learn more <ArrowOutwardIcon />
          </Button>
           </Link>
        </Box>
     </div>
     <div className='webdevimage'>
     <video src={VideoWebAppDevelopment} autoPlay loop muted  style={{width:"100%", height:"100%",background:"black"}} alt="" /> 
     </div>
    </div>
   
    <div className="webdev webdevsix">
 <div className='webdevheading' >
 <h1>Product
 <br /> Management</h1>
           <p>From idea to deployment, we provide hands-on consulting support to build your products.</p>
           <Box>
           <Link to="/productmanagement"  style={{textDecoration:"none"}} >
           <Button
            variant="outlined"
            sx={{
              border: '2px solid white',
              color: 'white',
              width: '170px',
              height: '50px',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#000',
                color:"#fff",
                border:"#000" // Set the hover background color to transparent
              },
            }}
          >
            Learn more <ArrowOutwardIcon />
          </Button>
           </Link>
        </Box>
</div>
<div className='webdevimage'>
<video src={ProductManagement} autoPlay loop muted  style={{width:"100%", height:"100%",background:"black"}} alt="" /> 
</div>
</div>
 <div className="webdev webdevthree">
 <div className='webdevheading' >
 <h1>UI/UX
 <br /> Designing</h1>
           <p>Creating a design and user experience that customers will never forget, approach that goes beyond aesthetics.</p>
           <Box>
           <Link to="/uiux" style={{textDecoration:"none"}} >
           <Button
            variant="outlined"
            sx={{
              border: '2px solid white',
              color: 'white',
              width: '170px',
              height: '50px',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#000',
                color:"#fff",
                border:"#000" // Set the hover background color to transparent
              },
            }}
          >
            Learn more <ArrowOutwardIcon />
          </Button>
           </Link>
        </Box>
  </div>
 <div className='webdevimage'>
<img src={uiuximg} alt="" />
</div>
</div>
 <div className="webdev webdevfive">
 <div className='webdevheading' >
 <h1>Logo  
 <br /> Designing</h1>
           <p>End-to-end branding, provided by our in-house creative design and branding experts.</p>
           <Box>
           <Link to="/productbranding" style={{textDecoration:"none"}} >
           <Button
            variant="outlined"
            sx={{
              border: '2px solid white',
              color: 'white',
              width: '170px',
              height: '50px',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#000',
                color:"#fff",
                border:"#000" // Set the hover background color to transparent
              },
            }}
          >
            Learn more <ArrowOutwardIcon />
          </Button>
           </Link>
        
        </Box>
</div>
<div className='webdevimage'>
<video src={LogoDesign} autoPlay loop muted  style={{width:"100%", height:"100%",background:"black"}} alt="" /> 
</div>
</div>

<div className="webdev webdevfive">
 <div className='webdevheading' >
 <h1>Social Media
 <br /> Marketing</h1>
           <p>Crafting impactful social media content requires a strategic mix of creativity and authenticity.</p>
           <Box>
           <Link to="/socialmedia" style={{textDecoration:"none"}} >
           <Button
            variant="outlined"
            sx={{
              border: '2px solid white',
              color: 'white',
              width: '170px',
              height: '50px',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#000',
                color:"#fff",
                border:"#000" // Set the hover background color to transparent
              },
            }}
          >
            Learn more <ArrowOutwardIcon />
          </Button>
           </Link>
        </Box>
</div>
<div className='webdevimage'>
<img src={socialmediaimg} alt="" />
</div>
</div>
<div className="webdev webdevfive">
 <div className='webdevheading' >
 <h1>Seo 
 <br /> Optimization</h1>
           <p>Crafting impactful social media content requires a strategic mix of creativity and authenticity.</p>
           <Box>
           <Link to="/seooptimization" style={{textDecoration:"none"}} >
           <Button
            variant="outlined"
            sx={{
              border: '2px solid white',
              color: 'white',
              width: '170px',
              height: '50px',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#000',
                color:"#fff",
                border:"#000" // Set the hover background color to transparent
              },
            }}
          >
            Learn more <ArrowOutwardIcon />
          </Button>
           </Link>
        </Box>
</div>
<div className='webdevimage'>
<video src={SeoOptimization} autoPlay loop muted  style={{width:"100%", height:"100%",background:"black"}} alt="" /> 
</div>
</div>

<div className="webdev webdevfive">
 <div className='webdevheading' >
 <h1>Staffing</h1>
           <p>Crafting impactful social media content requires a strategic mix of creativity and authenticity.</p>
           <Box>
           <Link to="/seooptimization" style={{textDecoration:"none"}} >
           <Button
            variant="outlined"
            sx={{
              border: '2px solid white',
              color: 'white',
              width: '170px',
              height: '50px',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#000',
                color:"#fff",
                border:"#000" // Set the hover background color to transparent
              },
            }}
          >
            Learn more <ArrowOutwardIcon />
          </Button>
           </Link>
        </Box>
</div>
<div className='webdevimage'>
<video src={Staffing} autoPlay loop muted  style={{width:"100%", height:"100%",background:"black"}} alt="" /> 
</div>
</div>
      
    </div>
  )
}

export default Webdevelopment
