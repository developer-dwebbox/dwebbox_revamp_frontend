import React from 'react'
import './Aboutus.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Bgimage from '../HomePage/Bgimagesection/Bgimage'
import Aboutusbanner from './Aboutusbanner'
import AboutusImages from './AboutusImages'

function Aboutus() {
  return (
    <div>
    <Navbar/>
    <Aboutusbanner/>
    <AboutusImages/>
    <Bgimage/>
    <Footer/>
    </div>
  )
}

export default Aboutus
