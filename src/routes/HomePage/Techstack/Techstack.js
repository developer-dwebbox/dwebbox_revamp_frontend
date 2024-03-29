import React, { useState, useEffect } from 'react';
import './Techstack.css';
import image1 from '../../../Assets/Images/Techstack/image 23.png';
import image3 from '../../../Assets/Images/Techstack/image 26.png';
import image4 from '../../../Assets/Images/Techstack/image 27.png';
import image5 from '../../../Assets/Images/Techstack/image 28.png';
import image6 from '../../../Assets/Images/Techstack/image 29.png';
import image7 from '../../../Assets/Images/Techstack/image 30.png';
import image8 from '../../../Assets/Images/Techstack/image 31.png';
import image9 from '../../../Assets/Images/Techstack/image 32.png';
import image10 from '../../../Assets/Images/Techstack/MuiImage.png';
import image12 from '../../../Assets/Images/Techstack/image 36.png';
import image13 from '../../../Assets/Images/Techstack/image 37.png';
import image14 from '../../../Assets/Images/Techstack/Azure.png';
import Typescript from '../../../Assets/Images/Techstack/Typescript.png'
import Django from '../../../Assets/Images/Techstack/Django.png';
import GoogleCloud from '../../../Assets/Images/Techstack/Google Cloud.png'
import mongodb from '../../../Assets/Images/Techstack/Mongodbnew.png'


import ArrowOutward from '@mui/icons-material/ArrowOutward';

function Techstack() {
  const [showAll, setShowAll] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const images = [
    image5,image6,image7, image1,image4, mongodb,
      image3,image9, image10, image12,image8,
    image13, image14,GoogleCloud,Typescript,Django
  ];

  const visibleImages = showAll ? images : images.slice(0, 6);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Call handleResize when component mounts to determine initial width
    handleResize();

    // Cleanup event listener when component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='Techstack'>
      <div className='Techstack-heading'>
        <h1>Techstack</h1>
        <p>We specialize in crafting custom digital products that precisely match our clients' needs, leveraging a diverse range of tools and technologies for innovative solutions.</p>
      </div>

      <div className='Techstack-skills'>
        {isMobileView ? (
          visibleImages.map((image, index) => (
            <div className="skills" key={index}>
              <img src={image} alt={`Tech ${index + 1}`} />
            </div>
          ))
        ) : (
          images.map((image, index) => (
            <div className="skills" key={index}>
              <img src={image} alt={`Tech ${index + 1}`} />
            </div>
          ))
        )}
        {isMobileView && ( // Render buttons only for mobile view
          <div className="view-more">
            {!showAll ? (
              <button className='viewmorebtn-techstack' onClick={() => setShowAll(true)}>View More <ArrowOutward/> </button>
            ) : (
              <button  className='viewmorebtn-techstack view-less-btn' onClick={() => setShowAll(false)}>View Less <ArrowOutward/> </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Techstack;
