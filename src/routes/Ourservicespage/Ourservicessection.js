import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Webdevelopment from '../HomePage/WebDevelopment/Webdevelopment'
import Bgimage from '../HomePage/Bgimagesection/Bgimage'
import Ourservicebanner from './Ourservicebanner'
import Ourservicespacing from './Ourservicespacing'

function Ourservicessection() {
  return (
    <div>
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
