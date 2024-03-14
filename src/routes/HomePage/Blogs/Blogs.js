import React from 'react'
import './Blogs.css'
import blogImgone from '../../../Assets/Images/BlogsImage/image 42.png'
import blogImgtwo from '../../../Assets/Images/BlogsImage/image 43.png'
import { Box,Button } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom'


function Blogs() {
  return (
    <div className='Blogs-section'>
      <div className='blog-heading-section' >
        <div className='blog-heading'>
<h1>Blogs</h1>
        </div>
        <div className='blog-button' >
        <Box>
        <Link to="/blogs" style={{textDecoration:"none"}} >
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
            All Blogs <ArrowOutwardIcon />
          </Button>
        </Link>

         
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
           <h3>Creative Advertising in our life became a info noise</h3>
           <Box>
           <Link to="/blogspage" style={{textDecoration:"none"}}>
           <Button
            variant="outlined"
            sx={{
              border: '2px solid white',
              color: 'white',
              fontFamily:'DM Sans',
              fontSize:'14.69px',
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
           </Link>

        
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
<h3>Creative Advertising in our life became a info noise</h3>
<Box>
<Link to="/blogspage" style={{textDecoration:"none"}}>
           <Button
            variant="outlined"
            sx={{
              border: '2px solid white',
              color: 'white',
              fontFamily:'DM Sans',
              fontSize:'14.69px',
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
           </Link>
        </Box>

        </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Blogs
