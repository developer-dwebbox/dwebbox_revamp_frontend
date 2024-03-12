import React from 'react'
import AbousUsBgImage from '../../../src/Assets/Images/AboutUsBgImage/Rectangle 90.png'
import video from '../../Assets/Video/Myvedio.mp4';


function Aboutusbgbanner() {
  return (
    <div>
      <div className='Aboutusbgimage' >
      <div className='AboutUsBgimageDescription'>
        <p>We believe in the power of creativity to inspire, connect and transform.</p>
        <h1>We are D<span>-</span>WebBox</h1>
      </div>
      <video src={video} className='about-us-video'   autoPlay loop muted ></video>
      </div>
    </div>
  )
}

export default Aboutusbgbanner
