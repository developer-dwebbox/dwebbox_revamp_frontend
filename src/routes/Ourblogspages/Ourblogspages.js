import React from 'react';
import './Ourblogspages.css'
import Ourblogspagesheading from './Ourblogspagesheading';
import Navbar from '../../components/Navbar/Navbar';
import Bgimage from '../HomePage/Bgimagesection/Bgimage';
import Footer from '../../components/Footer/Footer';
import Ourblogspagebanner from './Ourblogspagebanner';

function Ourblogspages() {
  return (
    <div>
    <Navbar/>
    <Ourblogspagesheading/>
    <Ourblogspagebanner/>
    <Bgimage/>
    <Footer/>
    </div>
  )
}

export default Ourblogspages
