import React from 'react'
import AbousUsBgImage from '../../../src/Assets/Images/AboutUsBgImage/Rectangle 90.png'

function Aboutusbgbanner() {
  return (
    <div>
      <div className='Aboutusbgimage' >
      <div className='AboutUsBgimageDescription'>
        <p>We believe in the power of creativity to inspire, connect and transform.</p>
        <h1>We are D<span>-</span>WebBox</h1>
      </div>
        <img src={AbousUsBgImage} width="100%" alt="" />
      </div>
    </div>
  )
}

export default Aboutusbgbanner
