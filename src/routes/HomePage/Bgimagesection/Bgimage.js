import React from 'react';
import './Bgimage.css';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CircleStar from '../../../Assets/Images/circle-star 1.png'

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
        <img src={CircleStar} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Bgimage;
