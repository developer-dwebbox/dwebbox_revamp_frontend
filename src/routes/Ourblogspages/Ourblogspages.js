import React from 'react';
import './Ourblogspages.css'
import Ourblogspagesheading from './Ourblogspagesheading';
import Navbar from '../../components/Navbar/Navbar';
import Bgimage from '../HomePage/Bgimagesection/Bgimage';
import Footer from '../../components/Footer/Footer';
import Ourblogspagebanner from './Ourblogspagebanner';
import ScrollToTopButton from '../HomePage/Scrolltotop/ScrollToTopButton';
import { useEffect } from 'react';

function Ourblogspages() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top when the component mounts
  }, []);

  return (
    <div style={{background:"#181818"}} >
    <ScrollToTopButton/>
    <Navbar/>
    <Ourblogspagesheading/>
    <Ourblogspagebanner/>
    <Bgimage/>
    <Footer/>
    </div>
  )
}

export default Ourblogspages
