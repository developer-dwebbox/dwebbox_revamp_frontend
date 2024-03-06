import React from 'react'
import './Ourteam.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Ourteamheading from './Ourteamheading';
import Ourteamimages from './Ourteamimages';

function Ourteam() {
  return (
    <div>
    <Navbar/>
    <Ourteamheading/>
    <Ourteamimages/>
    <Footer/>
    </div>
  )
}

export default Ourteam
