import React from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS SDK
import BannerImage from '../../../src/Assets/Images/ContactUsBanner.png';
import { Button, TextField } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contactusform() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data using EmailJS
    emailjs.sendForm(
      'service_mwf5ipp', // Replace with your EmailJS service ID
      'template_rmzr0li', // Replace with your EmailJS template ID
      e.target,
      'H81Gpi97ggtHVgerb' // Replace with your EmailJS user ID
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      toast.success('Your message sent successfully');
      e.target.reset();
    }, (error) => {
      console.error('Failed to send email:', error.text);
      toast.error('Failed to send email');

    });
  };

  return (
    <div className='Contactusform'>
      <div className='contactusbanner'>
        <img src={BannerImage} alt="" />
      </div>
      <div className='GetistouchContactus'>
        <div className='contact-info'>
          <h1 className='contact-info-heading-first'>Get In</h1>
          <h1 className='contact-info-heading-second'>Touch With Us.</h1>
          <p className='contact-info-paragraph'>If you would like to work with us or just want to get in touch, we’d love to hear from you!</p>
          <h1 className='contact-info-heading-third'>+91 88281 03808</h1>
        </div>
        <div className='contact-from'>
          <div className='contact-inputs-section'>
            <form onSubmit={handleSubmit}>
              <TextField
                id="name"
                name="name"
                placeholder='Name'
                InputProps={{ style: { color: 'white' } }}
                variant="outlined"
                fullWidth
                required
                sx={{
                  mb: 2,
                  border: "1px solid #4C4C4C",
                  borderRadius: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#4C4C4C',
                      border: "none"
                    },
                    '&:hover fieldset': {
                      borderColor: '#4C4C4C'
                    }
                  }
                }}
              />
              <TextField
                id="email"
                name="email"
                placeholder='Email'
                InputProps={{ style: { color: 'white' } }}
                variant="outlined"
                fullWidth
                required
                sx={{
                  mb: 2,
                  border: "1px solid #4C4C4C",
                  borderRadius: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#4C4C4C',
                      border: "none"
                    },
                    '&:hover fieldset': {
                      borderColor: '#4C4C4C'
                    }
                  }
                }}
              />
              <TextField
                id="subject"
                name="subject"
                placeholder='Subject'
                InputProps={{ style: { color: 'white' } }}
                variant="outlined"
                fullWidth
                required
                sx={{
                  mb: 2,
                  border: "1px solid #4C4C4C",
                  borderRadius: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#4C4C4C',
                      border: "none"
                    },
                    '&:hover fieldset': {
                      borderColor: '#4C4C4C'
                    }
                  }
                }}
              />
              <TextField
                id="description"
                name="description"
                placeholder='Description'
                variant="outlined"
                multiline
                rows={5}
                InputProps={{ style: { color: 'white' } }}
                fullWidth
                required
                sx={{
                  mb: 2,
                  border: "1px solid #4C4C4C",
                  borderRadius: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#4C4C4C',
                      border: "none"
                    },
                    '&:hover fieldset': {
                      borderColor: '#4C4C4C',
                    }
                  }
                }}
              />
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  border: '1.2px solid white',
                  color: 'white',
                  width: '200px',
                  height: '55px',
                  borderRadius: '50px',

                  '&:hover': {
                    backgroundColor: '#fff',
                    color: "#000",
                    border: "#fff" // Set the hover background color to transparent
                  },
                }}
              >
                Let’s Talk <ArrowOutwardIcon />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactusform;
