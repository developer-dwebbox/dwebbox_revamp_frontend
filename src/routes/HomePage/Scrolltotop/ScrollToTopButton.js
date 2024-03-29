import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Import CSS file
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTopButton = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const calcScrollValue = () => {
      const scrollProgress = document.getElementById('progress');
      const pos = document.documentElement.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const value = Math.round(((calcHeight - pos) * 100) / calcHeight); // Invert the value calculation

      if (pos > 100) {
        scrollProgress.style.display = 'grid';
      } else {
        scrollProgress.style.display = 'none';
      }
      scrollProgress.style.background = `conic-gradient(#181818 ${value}%, #d7d7d7 ${value}%)`;
      setScrollValue(value);
    };

    window.addEventListener('scroll', calcScrollValue);
    window.addEventListener('load', calcScrollValue);

    return () => {
      window.removeEventListener('scroll', calcScrollValue);
      window.removeEventListener('load', calcScrollValue);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Add smooth behavior for scrolling
    });
  };

  return (
    <div>
      <div id="progress" className="progress">
        <span id="progress-value" className="progress-value">
          <ArrowUpwardIcon className="custom-upwardarrow" onClick={scrollToTop} />
        </span>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
