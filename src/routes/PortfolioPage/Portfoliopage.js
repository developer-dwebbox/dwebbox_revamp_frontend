import React from 'react'
import Portfoliopageheading from './Portfoliopageheading'
import Bgimage from '../HomePage/Bgimagesection/Bgimage'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Portfoliotabs from './Portfoliotabs'
import ScrollToTopButton from '../HomePage/Scrolltotop/ScrollToTopButton'

function Portfoliopage() {
  return (
    <div>
    <ScrollToTopButton/>
    <Navbar/>
    <Portfoliopageheading/>
    <Portfoliotabs/>
    <Bgimage/>
    <Footer/>
    </div>
  )
}

export default Portfoliopage
