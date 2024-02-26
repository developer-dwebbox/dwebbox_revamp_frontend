import React from 'react'
import './MarqueeTwo.css'


function MarqueeTwo() {
  return (
    
    <div>
  <div className="marqueeTwo">
  <ul className="marquee__content scroll">
    <li>Web Development</li>
    <li>App Development</li>
    <li>UI/UX Designing</li>
    <li>Product Branding</li>
    <li>Product Management</li>
    <li>Social Media Marketing</li>
  </ul>
  <ul className="marquee__content scroll" aria-hidden="true">
  <li className='webdevmarquee' >Web Development</li>
    <li>App Development</li>
    <li>UI/UX Designing</li>
    <li>Product Branding</li>
    <li>Product Management</li>
    <li>Social Media Marketing</li>

  </ul>
</div>
    </div>
  )
}

export default MarqueeTwo
