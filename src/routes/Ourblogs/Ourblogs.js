import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Bgimage from '../HomePage/Bgimagesection/Bgimage';
import Ourblogsheading from './Ourblogsheading';
import Ourblogscards from './Ourblogscards';
import ScrollToTopButton from '../HomePage/Scrolltotop/ScrollToTopButton';


function Ourblogs() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top when the component mounts
  }, []);

  return (
    <div style={{background:"#181818"}} >
    <ScrollToTopButton/>
    <Navbar/>
    <Ourblogsheading/>
    <Ourblogscards/>
    <Bgimage/>
    <Footer/>
    </div>
  )
}

export default Ourblogs
