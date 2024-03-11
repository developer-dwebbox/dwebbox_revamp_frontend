import React from 'react'
import './Marquee.css'
import amyraa from '../../../Assets/Images/OurClientsline/Group 18155.png'
import asianpaints from '../../../Assets/Images/OurClientsline/Group 678.png'
import gptw from '../../../Assets/Images/OurClientsline/image 51.png'
import oren from '../../../Assets/Images/OurClientsline/image 75.png'
import fikka from '../../../Assets/Images/OurClientsline/image 76.png'

function Marquee() {
  return (
   
    <div>
  <div className="marquee">
  <ul className="marquee__content scroll">
    <li>
      <img src={amyraa} alt="" width="80%"  />
    </li>
    <li>
      <img src={asianpaints} alt="" width="80%"  />
    </li>
    <li>
      <img src={gptw} alt="" width="80%"  />
    </li>
    <li>
   <img src={oren} alt="" width="80%"  />
    </li>
    <li>
    <img src={fikka} alt="" width="80%"  />
    </li>
  </ul>
  <ul className="marquee__content scroll" aria-hidden="true">
  <li>
      <img src={amyraa} alt="" width="80%" />
    </li>
    <li>
      <img src={asianpaints} alt="" width="80%"  />
    </li>
    <li>
      <img src={gptw} alt="" width="80%"  />
    </li>
    <li>
   <img src={oren} alt="" width="80%"  />
    </li>
    <li>
    <img src={fikka} alt="" width="80%"  />
    </li>
    
  </ul>
</div>
    </div>
  )
}

export default Marquee
