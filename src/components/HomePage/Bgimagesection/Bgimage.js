import React from 'react';
import './Bgimage.css';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Bgimage() {
  return (
    <div className='Bgimage'>
      <div className='bgimagesection'>
        {/* You can put content here if needed */}
      </div>
      <div className='bgcontentsection'>
        <div className='bgcontentheading' >
          <h1>Have a project in mind?
Let’s get to <span>work.</span></h1>
        </div>
        <div className='bgcontentbtn' >
          <ArrowOutwardIcon/>
          <p>GET IN TOUCH</p>
        </div>
      </div>
    </div>
  );
}

export default Bgimage;
