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

import Clientimagestwentyseven from  '../../../src/Assets/Images/ClientsImages/Group 1272628252.png'
import Clientimagestwentyeight from  '../../../src/Assets/Images/ClientsImages/Group 1272628258.png'
import Clientimagestwentynine from  '../../../src/Assets/Images/ClientsImages/Group 1272628259.png'
import Clientimagesthirty from  '../../../src/Assets/Images/ClientsImages/Group 1272628263.png'
import Clientimagesthirtyone from  '../../../src/Assets/Images/ClientsImages/Group 1272628266.png'
import Clientimagesthirtytwo from  '../../../src/Assets/Images/ClientsImages/Group 1272628267.png'
import Clientimagesthirtythree from  '../../../src/Assets/Images/ClientsImages/Group 1272628268.png'
import Clientimagesthirtyfour from  '../../../src/Assets/Images/ClientsImages/Group 1272628270.png'
import Clientimagesthirtyfive from  '../../../src/Assets/Images/ClientsImages/Group 1272628272.png'
import Clientimagesthirtysix from  '../../../src/Assets/Images/ClientsImages/Group 1272628274.png'
import Clientimagesthirtyseven from  '../../../src/Assets/Images/ClientsImages/Group 1272628276.png'
import Clientimagesthirtyeight from  '../../../src/Assets/Images/ClientsImages/Group 1272628278.png'
import Clientimagesthirtynine from  '../../../src/Assets/Images/ClientsImages/Group 1272628280.png'
import Clientimagesfourty from  '../../../src/Assets/Images/ClientsImages/Group 1272628282.png'
import Clientimagesfourtyone from  '../../../src/Assets/Images/ClientsImages/Group 1272628284.png'
import Clientimagesfourtytwo from  '../../../src/Assets/Images/ClientsImages/Group 1272628286.png'
import Clientimagesfourtythree from  '../../../src/Assets/Images/ClientsImages/Group 1272628288.png'
import Clientimagesfourtyfour from  '../../../src/Assets/Images/ClientsImages/Group 1272628290.png'
import Clientimagesfourtyfive from  '../../../src/Assets/Images/ClientsImages/Group 1272628293.png'
import Clientimagesfourtysix from  '../../../src/Assets/Images/ClientsImages/Group 1272628295.png'
import Clientimagesfourtyseven from  '../../../src/Assets/Images/ClientsImages/Group 1272628298.png'
import Clientimagesfourtyeight from  '../../../src/Assets/Images/ClientsImages/Group 1272628300.png'
import Clientimagesfourtynine from  '../../../src/Assets/Images/ClientsImages/Group 1272628302.png'
import Clientimagesfifty from  '../../../src/Assets/Images/ClientsImages/Group 1272628304.png'
import Clientimagesfiftyone from  '../../../src/Assets/Images/ClientsImages/Group 1272628306.png'
import Clientimagesfiftytwo from  '../../../src/Assets/Images/ClientsImages/Group 1272628308.png'
import Clientimagesfiftythree from  '../../../src/Assets/Images/ClientsImages/Group 1272628310.png'
import Clientimagesfiftyfour from  '../../../src/Assets/Images/ClientsImages/Group 1272628314.png'
import Clientimagesfiftyfive from  '../../../src/Assets/Images/ClientsImages/Group 1272628317.png'
import Clientimagesfiftysix from  '../../../src/Assets/Images/ClientsImages/Group 1272628318.png'
import Clientimagesfiftyseven from  '../../../src/Assets/Images/ClientsImages/Group 1272628320.png'
import Clientimagesfiftyeight from  '../../../src/Assets/Images/ClientsImages/lock and key.png'
import Clientimagesfiftynine from  '../../../src/Assets/Images/ClientsImages/Group 18473.png'
import Clientimagessixty from  '../../../src/Assets/Images/ClientsImages/Group 18465.png'
import Clientimagessixtyone from  '../../../src/Assets/Images/ClientsImages/Group 1272628233.png'
import Clientimagessixtytwo from  '../../../src/Assets/Images/ClientsImages/Group 1272628235.png'
import Clientimagessixtythree from  '../../../src/Assets/Images/ClientsImages/Group 1272628244.png'
import Clientimagessixtyfour from  '../../../src/Assets/Images/ClientsImages/Group 1272628259.png'
import Clientimagessixtyfive from  '../../../src/Assets/Images/ClientsImages/Group 1272628263.png'














import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import 'swiper/swiper-bundle.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


// Import Swiper styles
import 'swiper/css/navigation';

// Import Navigation module separately
import { Autoplay, Navigation } from 'swiper/modules';

SwiperCore.use([Navigation,Autoplay]);


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
        autoplay={{ delay: 3000 }} // Autoplay configuration

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
        <SwiperSlide>
          
          <div className='clients-page-image' >
            <div className='client-img' >
              <img src={Clientimagestwentysix} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagestwentyseven} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagestwentyeight} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagestwentynine} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesthirty} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesthirtyone} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesthirtytwo} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesthirtythree} alt="" />
            </div>
         </div>
          </SwiperSlide>
          <SwiperSlide>
          
          <div className='clients-page-image' >
            <div className='client-img' >
              <img src={Clientimagesthirtyfour} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesthirtyfive} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesthirtysix} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesthirtyseven} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesthirtyeight} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesthirtynine} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesfourty} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesfourtyone} alt="" />
            </div>
         </div>
          </SwiperSlide>

          <SwiperSlide>
          
          <div className='clients-page-image' >
            <div className='client-img' >
              <img src={Clientimagesfourtytwo} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesfourtythree} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesfourtyfour} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesfourtyfive} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesfourtysix} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesfourtyseven} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesfourtyeight} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesfourtynine} alt="" />
            </div>
         </div>
          </SwiperSlide>
          <SwiperSlide>
          
          <div className='clients-page-image' >
            <div className='client-img' >
              <img src={Clientimagesfifty} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesfiftyone} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesfiftytwo} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesfiftythree} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesfiftyfour} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesfiftyfive} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesfiftysix} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesfiftyseven} alt="" />
            </div>
         </div>
          </SwiperSlide>
          <SwiperSlide>
          
          <div className='clients-page-image' >
            <div className='client-img' >
              <img src={Clientimagesfiftyeight} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagesfiftynine} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagessixty} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagessixtyone} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagessixtytwo} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagessixtythree} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagessixtyfour} alt="" />
            </div>
            <div className='client-img' >
              <img src={Clientimagessixtyfive} alt="" />
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
