import React from 'react'
import './Aboutus.css'
import Imageone from '../../../src/Assets/Images/OurTeam/ImageOne.png'
import Imagetwo from '../../../src/Assets/Images/OurTeam/ImageTwo.png'
import Imagethree from '../../../src/Assets/Images/OurTeam/ImageThree.png'
import Imagefour from '../../../src/Assets/Images/OurTeam/ImageFour.png'
import Imagefive from '../../../src/Assets/Images/OurTeam/ImageFive.png'
import Imagesix from '../../../src/Assets/Images/OurTeam/ImageSix.png'
import Imageseven from '../../../src/Assets/Images/OurTeam/ImageSeven.png'
import Imageeight from '../../../src/Assets/Images/OurTeam/ImageEight.png'



function AboutusImages() {
  return (
     <div>
   <div className="marqueeTeam">
  <ul className="marquee__contentTeam scrollTeam">
    <li>
      <img src={Imageone} alt="" width="90%"  />
    </li>
    <li>
      <img src={Imagetwo} alt="" width="90%"  />
    </li>
    <li>
   <img src={Imagethree} alt="" width="90%"  />
    </li>
    <li>
    <img src={Imagefour} alt="" width="90%"  />
    </li>
  </ul>
  <ul className="marquee__contentTeam scrollTeam">
  
  <li>
      <img src={Imageone} alt="" width="90%"  />
    </li>
    <li>
      <img src={Imagetwo} alt="" width="90%"  />
    </li>
    <li>
   <img src={Imagethree} alt="" width="90%"  />
    </li>
    <li>
    <img src={Imagefour} alt="" width="90%"  />
    </li>
  </ul>
</div>

<div className="marqueeTeam">
  <ul className="marquee__contentTeamTwo scrollTeamtwo">
    <li>
      <img src={Imagefive} alt="" width="90%"  />
    </li>
    <li>
      <img src={Imagesix} alt="" width="90%"  />
    </li>
    <li>
   <img src={Imageseven} alt="" width="90%"  />
    </li>
    <li>
    <img src={Imageeight} alt="" width="90%"  />
    </li>
  </ul>
  <ul className="marquee__contentTeamTwo scrollTeamtwo">
  
  <li>
      <img src={Imagefive} alt="" width="90%"  />
    </li>
    <li>
      <img src={Imagesix} alt="" width="90%"  />
    </li>
    <li>
   <img src={Imageseven} alt="" width="90%"  />
    </li>
    <li>
    <img src={Imageeight} alt="" width="90%"  />
    </li>
  </ul>
</div>
    </div>
    
  )
}

export default AboutusImages
