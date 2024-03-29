import React from 'react'
import './Aboutus.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Bgimage from '../HomePage/Bgimagesection/Bgimage'
import Aboutusbanner from './Aboutusbanner'
import AboutusImages from './AboutusImages'
import Aboutusbgbanner from './Aboutusbgbanner'
import Aboutusjourney from './Aboutusjourney'

import ScrollToTopButton from '../HomePage/Scrolltotop/ScrollToTopButton'


function Aboutus() {
  return (
    <div style={{background:"#181818"}} >
    <ScrollToTopButton/>
    <Navbar/>
    <Aboutusbanner/>
    <AboutusImages/>
    <Aboutusjourney/>
    <Aboutusbgbanner/>
    <Bgimage/>
    <Footer/>
    </div>
  )
}

export default Aboutus
