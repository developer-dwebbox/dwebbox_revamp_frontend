import React from 'react'
import './Aboutus.css'
import ImageOne from '../../../src/Assets/Images/OurTeam/Rectangle 39.png'
import ImageTwo from '../../../src/Assets/Images/OurTeam/Rectangle 44.png'
import ImageThree from '../../../src/Assets/Images/OurTeam/Rectangle 49.png'
import ImageFour from '../../../src/Assets/Images/OurTeam/Rectangle 50.png'



function AboutusImages() {
  return (
       <div className='AboutusImages' >
  <div className="marqueeFour">
  <ul className="marquee__content scroll">
    <p><img src={ImageOne} alt="" /></p>
    <p><img src={ImageOne} alt="" /></p>
    <p><img src={ImageOne} alt="" /></p>
  </ul>
  <ul className="marquee__content scroll" aria-hidden="true">
  <p><img src={ImageOne} alt="" /></p>
    <p><img src={ImageOne} alt="" /></p>
    <p><img src={ImageOne} alt="" /></p>
  </ul>
</div>
<div className="marqueeFour">
  <ul className="marquee__content scroll">
  <p><img src={ImageOne} alt="" /></p>
    <p><img src={ImageOne} alt="" /></p>
    <p><img src={ImageOne} alt="" /></p>
  </ul>
  <ul className="marquee__content scroll" aria-hidden="true">
  <p><img src={ImageOne} alt="" /></p>
    <p><img src={ImageOne} alt="" /></p>
    <p><img src={ImageOne} alt="" /></p>
  </ul>
</div>
    </div>
    
  )
}

export default AboutusImages
