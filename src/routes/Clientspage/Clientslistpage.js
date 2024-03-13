import React, { useRef } from 'react'
import './Clientspage.css';
import Clientimageone from  '../../../src/Assets/Images/ClientsImages/Group 18155.png'
import Clientimagetwo from  '../../../src/Assets/Images/ClientsImages/Group 18156.png'
import Clientimagethree from  '../../../src/Assets/Images/ClientsImages/Group 18157.png'
import Clientimagefour from  '../../../src/Assets/Images/ClientsImages/Group 18158.png'
import Clientimagefive from  '../../../src/Assets/Images/ClientsImages/Group 18159.png'
import Clientimagesix from  '../../../src/Assets/Images/ClientsImages/Group 18160.png'
import Clientimageseven from  '../../../src/Assets/Images/ClientsImages/Group 18401.png'
import Clientimageeight from  '../../../src/Assets/Images/ClientsImages/Group 18407.png'
import Clientimagenine from  '../../../src/Assets/Images/ClientsImages/Group 18408.png'
import Clientimageten from  '../../../src/Assets/Images/ClientsImages/Group 18409.png'
import Clientimageeleven from  '../../../src/Assets/Images/ClientsImages/Group 18410.png'
import Clientimagetwelve from  '../../../src/Assets/Images/ClientsImages/Group 18411.png'
import Clientimagetthirteen from  '../../../src/Assets/Images/ClientsImages/Group 18412.png'
import ClientimageFourteen from  '../../../src/Assets/Images/ClientsImages/Group 18413.png'
import Clientimagefifteen from  '../../../src/Assets/Images/ClientsImages/Group 18414.png'
import Clientimagesixteen from  '../../../src/Assets/Images/ClientsImages/Group 18415.png'
import Clientimageseventeen from  '../../../src/Assets/Images/ClientsImages/Group 18419.png'
import Clientimageeightteen from  '../../../src/Assets/Images/ClientsImages/Group 18420.png'
import Clientimagenineteen from  '../../../src/Assets/Images/ClientsImages/Group 18421.png'
import Clientimagestwenty from  '../../../src/Assets/Images/ClientsImages/Group 18425.png'
import Clientimagestwentyone from  '../../../src/Assets/Images/ClientsImages/Group 18426.png'
import Clientimagestwentytwo from  '../../../src/Assets/Images/ClientsImages/Group 18440.png'
import Clientimagestwentythree from  '../../../src/Assets/Images/ClientsImages/Group 18441.png'
import Clientimagestwentyfour from  '../../../src/Assets/Images/ClientsImages/Group 18442.png'
import Clientimagestwentyfive from  '../../../src/Assets/Images/ClientsImages/Group 18443.png'
import Clientimagestwentysix from  '../../../src/Assets/Images/ClientsImages/Group 18445.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import 'swiper/swiper-bundle.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Import Swiper styles
import 'swiper/css/navigation';

// Import Navigation module separately
import { Navigation } from 'swiper/modules';

SwiperCore.use([Navigation]);


function Clientslistpage() {
  const swiperRef = useRef(null);
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };


  return (
    <div className='Clientslistpage'>
    <div>
      <Swiper
        ref={swiperRef}
        spaceBetween={0}
        slidesPerView={1}
        loop={true} // Enable infinite loop
        navigation={{
          nextEl: '',
          prevEl: '',
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
        <div className='clients-page-image' >
          <div className='client-img' >
            <img src={Clientimageone} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagetwo} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagethree} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagefour} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagefive} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagesix} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimageseven} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimageeight} alt="" />
          </div>
       </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='clients-page-image' >
          <div className='client-img' >
            <img src={Clientimagenine} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimageten} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimageeleven} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagetwelve} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagetthirteen} alt="" />
          </div>
          <div className='client-img' >
            <img src={ClientimageFourteen} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagefifteen} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagesixteen} alt="" />
          </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
         
        <div className='clients-page-image' >
          <div className='client-img' >
            <img src={Clientimageseventeen} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimageeightteen} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagenineteen} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagestwenty} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagestwentyone} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagestwentytwo} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagestwentythree} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagestwentyfour} alt="" />
          </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
          
        <div className='clients-page-image' >
          <div className='client-img' >
            <img src={Clientimagestwentyfive} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagestwentysix} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagestwenty} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagefour} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagefive} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimagesix} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimageseven} alt="" />
          </div>
          <div className='client-img' >
            <img src={Clientimageeight} alt="" />
          </div>
       </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div>
      <button  
      style={{
      border:"1px solid black",
      borderRadius:"50%",
      padding:"16px",
      color:"#1818181",
      background:"#ffffff",
      marginRight:"5px",
      cursor:"pointer"
      }}  
      onClick={goPrev}>
        <ArrowBackIcon/>
      </button>
      <button 
      style={{
        marginLeft:"5px",
      border:"none",
      border:"1px solid black",
      borderRadius:"50%",
      padding:"16px",
      color:"#1818181",
      background:"#ffffff",
      cursor:"pointer"
      }}  onClick={goNext}>
       <ArrowForwardIcon/>
      </button>
    </div>
  </div>
  )
}

export default Clientslistpage
