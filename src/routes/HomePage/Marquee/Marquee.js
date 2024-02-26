import React from 'react'
import './Marquee.css'

function Marquee() {
  return (
   
    <div>
  <div className="marquee">
  <ul className="marquee__content scroll">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  <ul className="marquee__content scroll" aria-hidden="true">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</div>
    </div>
  )
}

export default Marquee
