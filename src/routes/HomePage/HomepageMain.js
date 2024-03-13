import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Clientreview from './Clientsreview/Clientreview';
import Main from './Main/Main';
import Animations from './Animations/Animation';
import ScrollToTopButton from './Scrolltotop/ScrollToTopButton';
import Techstack from './Techstack/Techstack';
import Webdevelopment from './WebDevelopment/Webdevelopment';
import Homeportfolio from './Homeportfolio/Homeportfolio';
import Bgimage from './Bgimagesection/Bgimage';
import Blogs from './Blogs/Blogs';
import Footer from '../../components/Footer/Footer';
import Ourclients from './Ourclients/Ourclients';
import Ourservice from './Ourservice/Ourservice';

function HomepageMain() {
  return (
    <div style={{background:"#181818"}} >
      <ScrollToTopButton/>
      <Navbar/>
      <Main/>
      <Animations/>
      <Homeportfolio/>
      <Ourservice/>
      <Webdevelopment/>
      <Ourclients/>
      <Clientreview/>
      <Techstack/>
      <Blogs/>
      <Bgimage/>
      <Footer/>
    </div>
  )
}

export default HomepageMain
