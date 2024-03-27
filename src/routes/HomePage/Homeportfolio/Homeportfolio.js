import React, { useRef } from 'react';
import './Homeportfolio.css';
import Fikaa from '../../../Assets/Images/Fikka.png';
import MissionToCure from '../../../Assets/Images/MissionToCure.png';
import Oren from '../../../Assets/Images/Oren.png';
import Jags from '../../../Assets/Images/Jags.png';


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import 'swiper/swiper-bundle.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Button } from '@mui/material';


// Import Swiper styles
import 'swiper/css/navigation';

// Import Navigation module separately
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

// Initialize Swiper core
SwiperCore.use([Navigation]);

function Homeportfolio() {
  const swiperRef = useRef(null);

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className='Homeportfolio-crousel'>
      <div className='portfolio-heading' >
        <h1>Portfolio</h1>
      </div>
      <div className='swiper-main' >
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={2.4}
          loop={true} // Enable infinite loop
          navigation={{
            nextEl: '.custom-next-button',
            prevEl: '.custom-prev-button',
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className='swiper-slide-section' >
          <Link to="/fikaacasestudy" style={{textDecoration:"none",color:"black"}} >
          <img src={Fikaa} alt="" style={{ width: "100%" }} />
            <p className='firstheading-portfolio'>FIKAA - BE FINANCIALLY FREE</p>
          </Link>
           
            
          </SwiperSlide>
          <SwiperSlide className='swiper-slide-section'  >
            <img src={MissionToCure} alt="" style={{ width: "100%" }} />
            <p className='firstheading-portfolio'>Mission to Cure</p>
           
          </SwiperSlide>
          <SwiperSlide className='swiper-slide-section'  >
            <img src={Jags} alt="" style={{ width: "100%" }} />
            <p className='firstheading-portfolio'>Jags</p>
           
          </SwiperSlide>
          <SwiperSlide className='swiper-slide-section'  >
            <img src={Oren} alt="" style={{ width: "100%" }} />
            <p className='firstheading-portfolio'>Oren</p>
            
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="custom-navigation">
      <Link to="/portfolio" style={{textDecoration:"none",marginLeft:"5%"}}>
      <Button
      className='All-Projects-Btn'
            variant="outlined"
            sx={{
              border: '1.2px solid #181818',
              color: '#181818',
              width: '180px',
              fontWeight:"600",
              height: '42px',
              marginLeft:"6%",
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#000',
                color:"#fff",
                border:"#fff" // Set the hover background color to transparent
              },
            }}
          >
            All Projects <ArrowOutwardIcon />
          </Button>
      </Link>

      

    
      
        <button className="custom-prev-button portfolio-btn-btn" onClick={goPrev}>
          {/* Your custom previous button icon or content */}
          <ArrowBackIcon/>
        </button>
        <button className="custom-next-button" onClick={goNext}>
          {/* Your custom next button icon or content */}
         <ArrowForwardIcon/>
        </button>
      </div>
    </div>
  );
}

export default Homeportfolio;
