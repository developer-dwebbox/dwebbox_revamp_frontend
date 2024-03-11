import React from 'react'
import './MarqueeTwo.css'


function MarqueeTwo() {
  return (
    
    <div className='marqueeTwoMain' >
  <div className="marqueeTwo">
  <ul className="marquee__content scrollMarkTwo">
    <li>Web Development</li>
    <li>App Development</li>
    <li>UI/UX Designing</li>
    <li>Logo Designing</li>
    <li>Product Management</li>
    <li>Social Media Marketing</li>
  </ul>
  <ul className="marquee__content scrollMarkTwo" aria-hidden="true">
  <li className='webdevmarquee' >Web Development</li>
    <li>App Development</li>
    <li>UI/UX Designing</li>
    <li>Logo Designing</li>
    <li>Product Management</li>
    <li>Social Media Marketing</li>

  </ul>
</div>
    </div>
  )
}

export default MarqueeTwo
