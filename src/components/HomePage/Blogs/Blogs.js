import React from 'react'
import './Blogs.css'
import blogImgone from '../../../Assets/Images/BlogsImage/image 42.png'
import blogImgtwo from '../../../Assets/Images/BlogsImage/image 43.png'
import { Box,Button } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Blogs() {
  return (
    <div className='Blogs-section'>
      <div className='blog-heading-section' >
        <div className='blog-heading'>
<h1>Blogs</h1>
        </div>
        <div className='blog-button' >
        <Box>
          <Button
            variant="outlined"
            sx={{
              border: '2px solid white',
              color: 'white',
              width: '170px',
              height: '50px',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#fff',
                color:"#000",
                border:"#fff" // Set the hover background color to transparent
              },
            }}
          >
            All Services <ArrowOutwardIcon />
          </Button>
        </Box>
        </div>
      </div>
      <div className='blog-content'>
        <div className='blog-one'>
        <div className='blog-inside'>
        <div className='blog-one-img'>
                  <img src={blogImgone} alt="" /> 
        </div>
        <div className='blog-one-content' >
           <p>AUGUST 6, 2022</p>
           <h3>Creative advertising in our life became a info noise</h3>
           <Box>
          <Button
            variant="outlined"
            sx={{
              border: '2px solid white',
              color: 'white',
              width: '170px',
              height: '50px',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#fff',
                color:"#000",
                border:"#fff" // Set the hover background color to transparent
              },
            }}
          >
            Read More <ArrowOutwardIcon />
          </Button>
        </Box>
        </div>
        </div>
          
        </div>
        <div className='blog-two'>
        <div className='blog-inside'>
        <div className='blog-one-img'>
             <img src={blogImgtwo} alt="" />    
      </div>
      <div className='blog-one-content' >
<p>AUGUST 6, 2022</p>
<h3>Creative advertising in our life became a info noise</h3>
<Box>
          <Button
            variant="outlined"
            sx={{
              border: '2px solid white',
              color: 'white',
              width: '170px',
              height: '50px',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#fff',
                color:"#000",
                border:"#fff" // Set the hover background color to transparent
              },
            }}
          >
            Read More <ArrowOutwardIcon />
          </Button>
        </Box>

        </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Blogs
