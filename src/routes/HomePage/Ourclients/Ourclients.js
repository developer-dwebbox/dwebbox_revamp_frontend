import React, { useState, useEffect } from 'react';
import './Ourclients.css';
import { Box, Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';

// Import all client images
import ClientImage1 from '../../../Assets/Images/ClientsImages/Group 18155.png';
import ClientImage2 from '../../../Assets/Images/ClientsImages/Group 18156.png';
import ClientImage3 from '../../../Assets/Images/ClientsImages/Group 18157.png';
import ClientImage4 from '../../../Assets/Images/ClientsImages/Group 18158.png';
import ClientImage5 from '../../../Assets/Images/ClientsImages/Group 18159.png';
import ClientImage6 from '../../../Assets/Images/ClientsImages/Group 18160.png';
import ClientImage7 from '../../../Assets/Images/ClientsImages/Group 18161.png';
import ClientImage8 from '../../../Assets/Images/ClientsImages/Group 18402.png';
import ClientImage9 from '../../../Assets/Images/ClientsImages/Group 18403.png';
import ClientImage10 from '../../../Assets/Images/ClientsImages/Group 18404.png';
import ClientImage11 from '../../../Assets/Images/ClientsImages/Group 18406.png';
import ClientImage12 from '../../../Assets/Images/ClientsImages/Group 18407.png';
import ClientImage13 from '../../../Assets/Images/ClientsImages/Group 18408.png';
import ClientImage14 from '../../../Assets/Images/ClientsImages/Group 18409.png';
import ClientImage15 from '../../../Assets/Images/ClientsImages/Group 18410.png';
import ClientImage16 from '../../../Assets/Images/ClientsImages/Group 18411.png';
import ClientImage17 from '../../../Assets/Images/ClientsImages/Group 18412.png';
import ClientImage18 from '../../../Assets/Images/ClientsImages/Group 18413.png';
import ClientImage19 from '../../../Assets/Images/ClientsImages/Group 18414.png';
import ClientImage20 from '../../../Assets/Images/ClientsImages/Group 18415.png';
import ClientImage21 from '../../../Assets/Images/ClientsImages/Group 18419.png';
import ClientImage22 from '../../../Assets/Images/ClientsImages/Group 18420.png';
import ClientImage23 from '../../../Assets/Images/ClientsImages/Group 18421.png';
import ClientImage24 from '../../../Assets/Images/ClientsImages/Group 18425.png';
import ClientImage25 from '../../../Assets/Images/ClientsImages/Group 18426.png';



function Ourclients() {
  // Define an array containing all client images
  const clientImages = [
    ClientImage1, ClientImage2, ClientImage3, ClientImage4, ClientImage5,
    ClientImage6, ClientImage7, ClientImage8, ClientImage9, ClientImage10,
    ClientImage11, ClientImage12, ClientImage13, ClientImage14, ClientImage15,
    ClientImage16, ClientImage17, ClientImage18, ClientImage19, ClientImage20,
    ClientImage21,ClientImage22,ClientImage23,ClientImage24,ClientImage25
  ];

  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Shuffle the array of client images
      const shuffled = clientImages.sort(() => Math.random() - 0.5).slice(0, 12);
      setShuffledImages(shuffled);
    }, 4000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [clientImages]);

  return (
    <div className='Ourclients-home'>
      <div className='Ourclients-home-heading'>
        <div className='Ourclients-heading-first'>
          <h2>Our Clients</h2>
        </div>
        <div className='Ourclients-heading-btn' >
          <Box>
            <Link to="/clients" style={{ textDecoration: "none" }} >
              <Button
                variant="outlined"
                sx={{
                  border: '2px solid white',
                  color: 'white',
                  width: '210px',
                  height: '50px',
                  borderRadius: '50px',
                  '&:hover': {
                    backgroundColor: '#fff',
                    color: "#000",
                    border: "#fff" // Set the hover background color to transparent
                  },
                }}
              >
                View All Clients <ArrowOutwardIcon />
              </Button>
            </Link>

          </Box>

        </div>
      </div>
      <div className='Ourclients-home-list' >
        {shuffledImages.map((image, index) => (
          <div className='clients' key={index}>
            <img src={image} alt={`Client ${index}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ourclients;
