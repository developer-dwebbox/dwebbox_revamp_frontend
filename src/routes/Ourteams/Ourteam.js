import React from 'react'
import './Ourteam.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Ourteamheading from './Ourteamheading';
import Ourteamimages from './Ourteamimages';
import Bgimage from '../HomePage/Bgimagesection/Bgimage';
import ScrollToTopButton from '../HomePage/Scrolltotop/ScrollToTopButton';

function Ourteam() {
  return (
    <div style={{background:"#181818"}} >
    <ScrollToTopButton/>
    <Navbar/>
    <Ourteamheading/>
    <Ourteamimages/>
    <Bgimage/>
    <Footer/>
    </div>
  )
}

export default Ourteam
