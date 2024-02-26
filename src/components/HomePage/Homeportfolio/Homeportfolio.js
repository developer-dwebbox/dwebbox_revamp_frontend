import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Homeportfolio.css';
import rectangleimage1 from '../../../Assets/Images/Rectangle 58.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


function Homeportfolio() {
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="custom-arrow custom-prev" onClick={onClick}>
              <ArrowForwardIcon/>
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="custom-arrow custom-next" onClick={onClick}>
              <ArrowBackIcon/>
      </button>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: false,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className='Homeportfolio'>
      <div className='Homeportfolio-heading' >
        <h1>Portfolio</h1>
      </div>
      <div className='swipercomponent'>
        <Slider {...settings}>
          <div className='slick-images' >
            <img src={rectangleimage1} alt="Image 1" />
            <h2 className='slick-images-heading' >Mobile Shoestore</h2>
            <h3   className='slick-images-heading' >UI/UX Design</h3>
          </div>
          <div className='slick-images' >
            <img src={rectangleimage1} alt="Image 1" />
            <h2 className='slick-images-heading' >Mobile Shoestore</h2>
            <h3   className='slick-images-heading' >UI/UX Design</h3>
          </div>
          <div className='slick-images' >
            <img src={rectangleimage1} alt="Image 1" />
            <h2 className='slick-images-heading' >Mobile Shoestore</h2>
            <h3   className='slick-images-heading' >UI/UX Design</h3>
          </div>
          {/* Add more slides here */}
        </Slider>
      </div>
      <div className='AllPortfolioButton'>
      <div className='portfolioButton' >
      <Button>All Portfolio <ArrowOutwardIcon/></Button>
      </div>
       
      </div>
    </div>
  );
}

export default Homeportfolio;
