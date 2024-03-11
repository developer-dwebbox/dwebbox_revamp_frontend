import React from 'react'
import './Clientspage.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Bgimage from '../HomePage/Bgimagesection/Bgimage';
import Clientslistpage from './Clientslistpage';
import Clientspageheading from './Clientspageheading';


function Clientspage() {
  return (
    <div>
    <Navbar/>
    <Clientspageheading/>
    <Clientslistpage/>
    <Bgimage/>
    <Footer/>
    </div>
  )
}

export default Clientspage
