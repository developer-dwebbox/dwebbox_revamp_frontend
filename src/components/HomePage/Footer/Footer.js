import React from 'react';
import './Footer.css'
import FooterLogo from '../../../Assets/Images/logo.svg'

function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer-list-content' >
         <div className='Footer-logo'>
           <img src={FooterLogo} alt="" />
         </div>
         <div className='footer-links' >
             <div className='footer-social-icons'>
                   <h3>Social</h3>
                   <p>LINKEDIN</p>
                   <p>INSTAGRAM</p>
                   <p>UPWORK</p>
                   <p>FACEBOOK</p>
                   
             </div>
             <div className='footer-Address'>
                <h3>Address</h3>
                <p>70, Ratnajyot Industrial Estate,
2nd Floor, Irla Lane,
Vile Parle (W), Mumbai, Maharashtra 400056</p>
<p>+91 9167871033</p>
<p>+91 9773050560</p>
                </div>
         </div>
      </div>
      <div className='connect-dewebbox'>
       <div className='collab-section'>
          <h2>Let's collaborate.</h2>
          <h1>connect@dwebbox.com</h1>
       </div>
      </div>
      <div className='footer-para'>
      
        <p>© 2024 D-WEBBOX IT SOUTIONS Pvt. Ltd.  <span className='footer-span' >All rights reserved. </span> </p>
      </div>
    </div>
  )
}

export default Footer
