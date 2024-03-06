import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Contactusheading from './Contactusheading';
import Workwithus from './Workwithus';
import Bgimage from '../HomePage/Bgimagesection/Bgimage';
import Contactusform from './Contactusform';

function Contactus() {
  return (
    <div>
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
