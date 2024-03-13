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
                   <p > <a  style={{textDecoration:"none",color:"white", fontFamily:"DM Sans18ptLight"}}  href="https://www.linkedin.com/company/d-webbox/mycompany/" target="_blank" >LINKEDIN</a> </p>
                   <p> <a style={{textDecoration:"none",color:"white",fontFamily:"DM Sans18ptLight"}}  href="https://www.instagram.com/dwebbox/" target="_blank" > INSTAGRAM</a></p>
                   <p> <a style={{textDecoration:"none",color:"white",fontFamily:"DM Sans18ptLight"}}  href="" target="_blank" > UPWORK</a></p>
                   </div>
             </div>
             <div className='footer-Address'>
                <h3 className='address-heading' >Address</h3>
                <p className='address-paragraph'>70, Ratnajyot Industrial Estate,
2nd Floor, Irla Lane,
Vile Parle (W), Mumbai, Maharashtra 400056</p>
<p className='mobile-number' >+91 8828103808</p>
<p className='mobile-number-second' >+91 8484946567</p>
<p className='mobile-number-second' >+91 9167871033</p>

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
