import React from 'react';
import './Footer.css'
import FooterLogo from '../../Assets/Images/logo.svg'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer-list-content' >
         <div className='Footer-logo'>
           <img src={FooterLogo} alt="" />
         </div>
         <div className='footer-links' >
             <div className='footer-social-icons'>
             <div className='social-heading' >
             <h3>Social</h3>
             </div>
                   <div className='social-links' >
                   <p>LINKEDIN</p>
                   <p>INSTAGRAM</p>
                   <p>UPWORK</p>
                   <p>FACEBOOK</p>
                   </div>
                  
                   
             </div>
             <div className='footer-Address'>
                <h3>Address</h3>
                <p className='address-paragraph'>70, Ratnajyot Industrial Estate,
2nd Floor, Irla Lane,
Vile Parle (W), Mumbai, Maharashtra 400056</p>
<p className='mobile-number' >+91 9167871033</p>
<p>+91 9773050560</p>
                </div>
         </div>
      </div>
      <div className='connect-dewebbox'>
       <div className='collab-section'>
          <h2>Let's collaborate.</h2>
          <div className='arrow-heading' >
          <h1>connect@dwebbox.com </h1>
          <ArrowOutwardIcon className='arrow-outward-icon' sx={{color:"white",fontSize:"50px",fontWeight:"700",marginTop:"5px"}} />
          </div>
         
          
       </div>
      </div>

<div className="straight-line-footer"></div>

      <div className='footer-para'>
        <p>© 2024 D-WEBBOX IT SOLUTIONS Pvt. Ltd.  <span className='footer-span' >All rights reserved. </span> </p>
      </div>
    </div>
  )
}

export default Footer
