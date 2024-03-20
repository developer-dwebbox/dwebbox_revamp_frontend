import React, { useEffect, useState } from 'react';
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
import Preloader from '../../components/Loader/preloader';

function HomepageMain() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as needed
  }, []);

  return (
    <div style={{background:"#181818"}} >
      {loading ? (
        <Preloader/>
      ) : (
        <>
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
        </>
      )}
    </div>
  )
}

export default HomepageMain
