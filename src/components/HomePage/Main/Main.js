import React from 'react'
import './Main.css'
import video from '../../../Assets/Video/Dwebbox.mp4'

function Main() {
  return (
    
    <div className='main-dev' >
      <div className='main-right'>
         <div className='heading-section'>
         <h1 className='heading-one'>We develop</h1>
         <h1 className='heading-two'>digital products</h1>
         <h1 className='heading-three'>from scratch</h1>
         </div>
      </div>
      <div className='main-left' >
        <div className='video-section'>
           <video className='dwb-video' src={video}  width="100%" autoPlay loop muted ></video>
        </div>
      </div>
    </div>
  
  )
}

export default Main
