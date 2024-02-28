import React, { useState, useEffect } from 'react';
import './Techstack.css';
import image1 from '../../../Assets/Images/Techstack/image 23.png';
import image2 from '../../../Assets/Images/Techstack/image 25.png';
import image3 from '../../../Assets/Images/Techstack/image 26.png';
import image4 from '../../../Assets/Images/Techstack/image 27.png';
import image5 from '../../../Assets/Images/Techstack/image 28.png';
import image6 from '../../../Assets/Images/Techstack/image 29.png';
import image7 from '../../../Assets/Images/Techstack/image 30.png';
import image8 from '../../../Assets/Images/Techstack/image 31.png';
import image9 from '../../../Assets/Images/Techstack/image 32.png';
import image10 from '../../../Assets/Images/Techstack/image 33.png';
import image11 from '../../../Assets/Images/Techstack/image 34.png';
import image12 from '../../../Assets/Images/Techstack/image 36.png';
import image13 from '../../../Assets/Images/Techstack/image 37.png';
import image14 from '../../../Assets/Images/Techstack/image 38.png';
import image15 from '../../../Assets/Images/Techstack/image 39.png';

function Techstack() {
  const [showAll, setShowAll] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const images = [
    image1, image2, image3, image4, image5, image6,
    image7, image8, image9, image10, image11, image12,
    image13, image14, image15
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
              <button className='viewmorebtn-techstack' onClick={() => setShowAll(true)}>View More</button>
            ) : (
              <button  className='viewmorebtn-techstack view-less-btn' onClick={() => setShowAll(false)}>View Less</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Techstack;
