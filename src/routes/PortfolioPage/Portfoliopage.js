import React, { useEffect } from 'react'
import Portfoliopageheading from './Portfoliopageheading'
import Bgimage from '../HomePage/Bgimagesection/Bgimage'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Portfoliotabs from './Portfoliotabs'
import ScrollToTopButton from '../HomePage/Scrolltotop/ScrollToTopButton'


function Portfoliopage() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top when the component mounts
  }, []);

  return (
    <div style={{background:"#181818"}} >
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
