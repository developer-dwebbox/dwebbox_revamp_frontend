import React from 'react';
import './Contactus.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Button } from '@mui/material';


function Workwithus() {
  return (
    <div className='Workwithus'>
      <div className='workwithusbannersection' >
       <div className='workwithusinfoheading' >
        <h1>Work with us</h1>
        <p>Our origins intertwine with Mumbai, the bustling heart of India's commerce and a haven of vibrant life. Through the passage of time, most of our dedicated employees have embarked on a quest to rediscover our rich heritage.</p>
       </div>
       <div className='job-roles' >
          <div className='job-role-heading' >
          <h1>Open job roles</h1>
          </div>
          <div className='job-role-section' >
            <div className='job-section' >
<h2>Engineering Manager</h2>
<p>Knowledge sharing with the broader development ecosystem.</p>
<Button
            variant="outlined"
            sx={{
              background:"#FFFFFF",
              border:"none",
              marginTop:"2vh",
              color: 'black',
              width: '120px',
              height: '32px',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#fff',
                color:"#000",
                border:"#fff" // Set the hover background color to transparent
              },
            }}
          >
            Mumbai
          </Button>
          <div>
          <Button
            variant="outlined"
            sx={{
              border: '1.2px solid white',
              color: 'white',
              marginTop:'5vh',
              width: '280px',
              height: '48px',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#fff',
                color:"#000",
                border:"#fff" // Set the hover background color to transparent
              },
            }}
          >
            View Job Description <ArrowOutwardIcon />
          </Button>
          </div>
            </div>
            <div className='job-section' >
<h2>Product Designer</h2>
<p>Knowledge sharing with the broader development ecosystem.</p>
<Button
            variant="outlined"
            sx={{
              background:"#FFFFFF",
              border:"none",
              color: 'black',
              width: '120px',
              height: '32px',
              marginTop:"2vh",
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#fff',
                color:"#000",
                border:"#fff" // Set the hover background color to transparent
              },
            }}
          >
            Mumbai
          </Button>
          <div>
          <Button
            variant="outlined"
            sx={{
              border: '1.2px solid white',
              color: 'white',
              width: '280px',
              height: '48px',
              marginTop:'5vh',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#fff',
                color:"#000",
                border:"#fff" // Set the hover background color to transparent
              },
            }}
          >
            View Job Description <ArrowOutwardIcon />
          </Button>
          </div>

</div>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Workwithus
