import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Contactusheading from './Contactusheading';
import Workwithus from './Workwithus';
import Bgimage from '../HomePage/Bgimagesection/Bgimage';
import Contactusform from './Contactusform';
import ScrollToTopButton from '../HomePage/Scrolltotop/ScrollToTopButton';

function Contactus() {
  return (
    <div>
    <ScrollToTopButton/>
    <Navbar/>
    <Contactusheading/>
    <Contactusform/>
    <Workwithus/>
    <Bgimage/>
    <Footer/>
    </div>
  )
}

export default Contactus
