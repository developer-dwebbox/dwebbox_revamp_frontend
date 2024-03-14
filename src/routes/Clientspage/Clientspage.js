import React, { useEffect } from 'react'
import './Clientspage.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Bgimage from '../HomePage/Bgimagesection/Bgimage';
import Clientslistpage from './Clientslistpage';
import Clientspageheading from './Clientspageheading';
import ScrollToTopButton from '../HomePage/Scrolltotop/ScrollToTopButton';



function Clientspage() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top when the component mounts
  }, []);

  return (
    <div style={{background:"#181818"}} >
    <ScrollToTopButton/>
    <Navbar/>
    <Clientspageheading/>
    <Clientslistpage/>
    <Bgimage/>
    <Footer/>
    </div>
  )
}

export default Clientspage
