import React from 'react'
import BannerImage from '../../../src/Assets/Images/BannerImage.png'
import { Button, TextField } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';



function Contactusform() {
  return (
    <div className='Contactusform'>
      <div className='contactusbanner'>
        <img src={BannerImage} alt="" />
      </div>
      <div className='GetistouchContactus' >
        <div className='contact-info'>
      <h1 className='contact-info-heading-first' >Get In</h1>
      <h1 className='contact-info-heading-second' >Touch With Us.</h1>
      <p className='contact-info-paragraph' >If you would like to work with us or just want to get in touch, we’d love to hear from you!</p>
      <h1 className='contact-info-heading-third' >+91 9167871033</h1>
        </div>
        <div className='contact-from'>

  <div className='contact-inputs-section' >
  <TextField 
              id="outlined-basic" 
              placeholder='Name' 
              InputProps={{style: {color: 'white'}}}
              variant="outlined" 
              sx={{ 
                mb: 2, 
                '& .MuiOutlinedInput-root': { 
                  '& fieldset': { 
                    borderColor: 'white'
                  },
                  '&:hover fieldset': {
                    borderColor: 'white'
                  }
                }
              }} 
            />
            <TextField 
              id="outlined-basic" 
              placeholder='Email' 
              InputProps={{style: {color: 'white'}}}
              variant="outlined" 
              sx={{ 
                mb: 2, 
                
                '& .MuiOutlinedInput-root': { 
                  '& fieldset': { 
                    borderColor: 'white'
                  },
                  '&:hover fieldset': {
                    borderColor: 'white'
                  }
                }
              }} 
            />
            <TextField 
              id="outlined-basic" 
              placeholder='Subject' 
              fullWidth 
              InputProps={{style: {color: 'white'}}}
              variant="outlined" 
              sx={{ 
                mb: 2, 
                '& .MuiOutlinedInput-root': { 
                  '& fieldset': { 
                    borderColor: 'white'
                  },
                  '&:hover fieldset': {
                    borderColor: 'white'
                  }
                }
              }} 
            />
            <TextField 
              id="outlined-basic" 
              placeholder='Description' 
              variant="outlined" 
              multiline 
              rows={5} 
              InputProps={{style: {color: 'white'}}}
              fullWidth 
              sx={{ 
                mb: 2, 
                '& .MuiOutlinedInput-root': { 
                  '& fieldset': { 
                    borderColor: 'white'
                  },
                  '&:hover fieldset': {
                    borderColor: 'white'
                  }
                }
              }} 
            />

<Button
            variant="outlined"
            sx={{
              border: '1.2px solid white',
              color: 'white',
              width: '200px',
              height: '55px',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#fff',
                color:"#000",
                border:"#fff" // Set the hover background color to transparent
              },
            }}
          >
            Let’s Talk <ArrowOutwardIcon />
          </Button>

  </div>
    </div>
      </div>
    </div>
  )
}

export default Contactusform
