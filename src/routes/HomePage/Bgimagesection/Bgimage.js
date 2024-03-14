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
        <div  className='bgcontentbtn' >
        
        <img src={CircleStar} alt="" width="101%" className='CircleStar-img' />
        <div  className='get-in-touch-content' >
        <div>
        <a style={{ textDecoration: "none",color:"white" }}  rel="noreferrer" href="https://api.whatsapp.com/send?phone=+918828103808text=Hello" target="_blank" className='bgcontentbtn'>
        <ArrowOutward/>
    <p>Get In Touch</p>
    </a>
        </div>

        </div>
        </div>
      </div>
    </div>
  );
}

export default Bgimage;
