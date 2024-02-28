import './App.css';
import Homeportfolio from './routes/HomePage/Homeportfolio/Homeportfolio'
import Navbar from './components/Navbar/Navbar'
import Main from '../src/routes/HomePage/Main/Main';
import Animations from './routes/HomePage/Animations/Animation';
import Ourservice from './routes/HomePage/Ourservice/Ourservice';
import Webdevelopment from './routes/HomePage/WebDevelopment/Webdevelopment';
import Ourclients from './routes/HomePage/Ourclients/Ourclients';
import Clientreview from './routes/HomePage/Clientsreview/Clientreview';
import Techstack from './routes/HomePage/Techstack/Techstack';
import Blogs from './routes/HomePage/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './routes/HomePage/Scrolltotop/ScrollToTopButton';
import BgImage from './routes/HomePage/Bgimagesection/Bgimage'
// import Ourservicessection from './routes/Ourservicespage/Ourservicessection';

function App() {
  return (
    <div>
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
<BgImage/>
<Footer/>
{/* <Ourservicessection/>   */}
    </div>
  );
}

export default App;
