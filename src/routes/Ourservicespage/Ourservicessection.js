import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Webdevelopment from '../HomePage/WebDevelopment/Webdevelopment'
import Bgimage from '../HomePage/Bgimagesection/Bgimage'
import Ourservicebanner from './Ourservicebanner'
import Ourservicespacing from './Ourservicespacing'
import ScrollToTopButton from '../HomePage/Scrolltotop/ScrollToTopButton'

function Ourservicessection() {
  return (
    <div>
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
