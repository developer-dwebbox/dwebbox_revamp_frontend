import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Webdevelopment from '../HomePage/WebDevelopment/Webdevelopment'
import Bgimage from '../HomePage/Bgimagesection/Bgimage'
import Ourservicebanner from './Ourservicebanner'
import Ourservicespacing from './Ourservicespacing'
import ScrollToTopButton from '../HomePage/Scrolltotop/ScrollToTopButton'
import { useEffect } from 'react'

function Ourservicessection() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top when the component mounts
  }, []);

  return (
    <div style={{background:"#181818"}} >
    <ScrollToTopButton/>
    <Navbar/>
    <Ourservicebanner/>
    <Webdevelopment/>
    <Ourservicespacing/>
    <Bgimage/>
    <Footer/>
    </div>
  )
}

export default Ourservicessection
