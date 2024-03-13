import React from 'react';
import './Bgimage.css';
import CircleStar from '../../../Assets/Images/GetInTouch.png'
import ArrowOutward from '@mui/icons-material/ArrowOutward';

function Bgimage() {
  return (
    <div className='Bgimage'>
      <div className='bgimagesection'>
        {/* You can put content here if needed */}
        {/* <img src={bgImage} alt="" /> */}
      </div>
      <div className='bgcontentsection'>
        <div className='bgcontentheading'>
          <h1>Have a project in mind?</h1>
          <h1 className='letsgettowork' > Let’s get to <span>work.</span></h1>
        </div>
        <div className='bgcontentbtn' >
        <img src={CircleStar} alt="" width="101%" />
        <div className='get-in-touch-content' >
<ArrowOutward/>
          <p>Get In Touch</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Bgimage;
