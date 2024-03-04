// Cursor.js

import React, { useState, useEffect } from 'react';
import './Cursor.css';

function Cursorview() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="custom-cursor" style={{ left: position.x, top: position.y }}></div>
  );
}

export default Cursorview;
