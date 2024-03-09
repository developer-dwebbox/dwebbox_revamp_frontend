import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Bgimage from '../HomePage/Bgimagesection/Bgimage';
import Ourblogsheading from './Ourblogsheading';
import Ourblogscards from './Ourblogscards';
import ScrollToTopButton from '../HomePage/Scrolltotop/ScrollToTopButton';

function Ourblogs() {
  return (
    <div>
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
