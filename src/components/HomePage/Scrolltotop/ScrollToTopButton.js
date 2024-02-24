// ScrollToTopButton.js

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
      const value = Math.round((pos * 100) / calcHeight);

      if (pos > 100) {
        scrollProgress.style.display = 'grid';
      } else {
        scrollProgress.style.display = 'none';
      }

      scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
      });

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

  return (
    <div>
     <div id="progress" className="progress">
  <span id="progress-value" className="progress-value">
    <ArrowUpwardIcon className="custom-upwardarrow" />
  </span>
</div>

    </div>
  );
};

export default ScrollToTopButton;
