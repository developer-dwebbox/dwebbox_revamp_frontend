import React  from 'react'
import './Webdevelopment.css'
import webdevimg from '../../../Assets/Images/WebDevelopment/WebDevelopment.png'
import productbranding from '../../../Assets/Images/WebDevelopment/Rectangle 59-1.png'
import uiuximg from '../../../Assets/Images/WebDevelopment/representations-user-experience-interface-design 1.png'
import productmanagementimg from '../../../Assets/Images/WebDevelopment/representations-user-experience-interface-design 1-1.png'
import socialmediaimg from '../../../Assets/Images/WebDevelopment/Rectangle 59.png'


function Webdevelopment() {
  return (
    <div className='webdevelopment-container'>
    <div className="webdev webdevone">
     <div className='webdevheading'>
           <h1>Web <br /> Developmemt</h1>
           <p>The perfect online front for your customers to experience the best of what your company offers.</p>
           <button>Learn More</button>
     </div>
     <div className='webdevimage'>
<img src={webdevimg} alt="" />
     </div>
    </div>
    <div className="webdev webdevtwo">
    <div className='webdevheading'>
    <h1>App <br /> Developmemt</h1>
           <p>The perfect online front for your customers to experience the best of what your company offers.</p>
           <button>Learn More</button>
</div>
<div className='webdevimage'>
<img src={webdevimg} alt="" />

</div>
</div>
 <div className="webdev webdevthree">
 <div className='webdevheading' >
 <h1>UI/UX
 <br /> Designing</h1>
           <p>The perfect online front for your customers to experience the best of what your company offers.</p>
           <button>Learn More</button>
  </div>
 <div className='webdevimage'>
<img src={uiuximg} alt="" />
</div>
</div>
 <div className="webdev webdevfive">
 <div className='webdevheading' >
 <h1>Product 
 <br /> Branding</h1>
           <p>The perfect online front for your customers to experience the best of what your company offers.</p>
           <button>Learn More</button>
</div>
<div className='webdevimage'>
<img src={productbranding} alt="" />
</div>
</div>
<div className="webdev webdevsix">
 <div className='webdevheading' >
 <h1>Product
 <br /> Management</h1>
           <p>The perfect online front for your customers to experience the best of what your company offers.</p>
           <button>Learn More</button>
</div>
<div className='webdevimage'>
<img src={productmanagementimg} alt="" />
</div>
</div>
<div className="webdev webdevfive">
 <div className='webdevheading' >
 <h1>Social Media
 <br /> Marketing</h1>
           <p>The perfect online front for your customers to experience the best of what your company offers.</p>
           <button>Learn More</button>
</div>
<div className='webdevimage'>
<img src={socialmediaimg} alt="" />
</div>
</div>
      
    </div>
  )
}

export default Webdevelopment
