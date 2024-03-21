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
import ClientImage26 from '../../../Assets/Images/ClientsImages/Group 18440.png';
import ClientImage27 from '../../../Assets/Images/ClientsImages/Group 18441.png';
import ClientImage28 from '../../../Assets/Images/ClientsImages/Group 18442.png';
import ClientImage29 from '../../../Assets/Images/ClientsImages/Group 18443.png';
import ClientImage30 from '../../../Assets/Images/ClientsImages/Group 18445.png';
import ClientImage31 from '../../../Assets/Images/ClientsImages/Group 18465.png';
import ClientImage32 from '../../../Assets/Images/ClientsImages/Group 18473.png';
import ClientImage33 from '../../../Assets/Images/ClientsImages/lock and key.png';

import ClientImage34 from '../../../Assets/Images/ClientsImages/Group 1272628233.png';
import ClientImage35 from '../../../Assets/Images/ClientsImages/Group 1272628235.png';
import ClientImage36 from '../../../Assets/Images/ClientsImages/Group 1272628239.png';
import ClientImage37 from '../../../Assets/Images/ClientsImages/Group 1272628244.png';
import ClientImage38 from '../../../Assets/Images/ClientsImages/Group 1272628252.png';
import ClientImage39 from '../../../Assets/Images/ClientsImages/Group 1272628255.png';
import ClientImage40 from '../../../Assets/Images/ClientsImages/Group 1272628258.png';
import ClientImage41 from '../../../Assets/Images/ClientsImages/Group 1272628258.png';
import ClientImage42 from '../../../Assets/Images/ClientsImages/Group 1272628259.png';
import ClientImage43 from '../../../Assets/Images/ClientsImages/Group 1272628266.png';
import ClientImage44 from '../../../Assets/Images/ClientsImages/Group 1272628267.png';
import ClientImage45 from '../../../Assets/Images/ClientsImages/Group 1272628268.png';
import ClientImage46 from '../../../Assets/Images/ClientsImages/Group 1272628270.png';
import ClientImage47 from '../../../Assets/Images/ClientsImages/Group 1272628274.png';
import ClientImage48 from '../../../Assets/Images/ClientsImages/Group 1272628276.png';
import ClientImage49 from '../../../Assets/Images/ClientsImages/Group 1272628278.png';
import ClientImage50 from '../../../Assets/Images/ClientsImages/Group 1272628280.png';









function Ourclients() {
  const [shuffledImages, setShuffledImages] = useState([]);
  // Define an array containing all client images
  const clientImages = [
    ClientImage1, ClientImage2, ClientImage3, ClientImage4, ClientImage5,
    ClientImage6, ClientImage7, ClientImage8, ClientImage9, ClientImage10,
    ClientImage11, ClientImage12, ClientImage13, ClientImage14, ClientImage15,
    ClientImage16, ClientImage17, ClientImage18, ClientImage19, ClientImage20,
    ClientImage21,ClientImage22,ClientImage23,ClientImage24,ClientImage25,
    ClientImage26,ClientImage27,ClientImage28,ClientImage29,ClientImage30,
    ClientImage31,ClientImage32,ClientImage33,ClientImage34,ClientImage35,
    ClientImage36,ClientImage37,ClientImage38,ClientImage39,ClientImage40,
    ClientImage41,ClientImage42,ClientImage43,ClientImage44,ClientImage45,
    ClientImage46,ClientImage47,ClientImage48,ClientImage49,ClientImage50
  ];


  useEffect(() => {
    const intervalId = setInterval(() => {
      // Shuffle the array of client images
      const shuffled = clientImages.sort(() => Math.random() - 0.5).slice(0, 8);
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
