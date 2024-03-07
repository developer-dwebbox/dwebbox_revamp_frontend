import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Bgimage from '../HomePage/Bgimagesection/Bgimage';
import Ourblogsheading from './Ourblogsheading';
import Ourblogscards from './Ourblogscards';

function Ourblogs() {
  return (
    <div>
    <Navbar/>
    <Ourblogsheading/>
    <Ourblogscards/>
    <Bgimage/>
    <Footer/>
    </div>
  )
}

export default Ourblogs
