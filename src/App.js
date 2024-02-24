import './App.css';
import Homeportfolio from './components/HomePage/Homeportfolio/Homeportfolio';
import Navbar from './components/HomePage/Navbar/Navbar';
import Main from './components/HomePage/Main/Main';
import Animations from './components/HomePage/Animations/Animation';
import Ourservice from './components/HomePage/Ourservice/Ourservice';
import Webdevelopment from './components/HomePage/WebDevelopment/Webdevelopment';
import Ourclients from './components/HomePage/Ourclients/Ourclients';
import Clientreview from './components/HomePage/Clientsreview/Clientreview';
import Techstack from './components/HomePage/Techstack/Techstack';
import Blogs from './components/HomePage/Blogs/Blogs';
import Footer from './components/HomePage/Footer/Footer';
import ScrollToTopButton from './components/HomePage/Scrolltotop/ScrollToTopButton';
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
<Footer/>
    </div>
  );
}

export default App;
