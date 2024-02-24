import React from 'react'
import './Blogs.css'
import blogImgone from '../../../Assets/Images/BlogsImage/image 42.png'
import blogImgtwo from '../../../Assets/Images/BlogsImage/image 43.png'


function Blogs() {
  return (
    <div className='Blogs-section'>
      <div className='blog-heading-section' >
        <div className='blog-heading'>
<h1>Blogs</h1>
        </div>
        <div className='blog-button' >
<button>All Blogs</button>
        </div>
      </div>
      <div className='blog-content'>
        <div className='blog-one'>
        <div className='blog-inside'>
        <div className='blog-one-img'>
                  <img src={blogImgone} alt="" /> 
        </div>
        <div className='blog-one-content' >
           <p>AUGUST 6, 2022</p>
           <h3>Creative advertising in our life became a info noise</h3>
           <button>Read more</button>
        </div>
        </div>
          
        </div>
        <div className='blog-two'>
        <div className='blog-inside'>
        <div className='blog-one-img'>
             <img src={blogImgtwo} alt="" />    
      </div>
      <div className='blog-one-content' >
<p>AUGUST 6, 2022</p>
<h3>Creative advertising in our life became a info noise</h3>
<button>Read more</button>

        </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Blogs
