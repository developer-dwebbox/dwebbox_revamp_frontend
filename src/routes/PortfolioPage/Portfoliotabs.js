import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MobileDev from '../../../src/Assets/Images/PortfolioImages/Rectangle 28.png'
import MobileDevTwo from '../../../src/Assets/Images/PortfolioImages/Rectangle 18.png'
import './Portfoliopage.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import FikkaThumnail from '../../../src/Assets/Images/PortfolioImages/FikkaThumnail.png'
import MissonToCureThumbnail from '../../../src/Assets/Images/PortfolioImages/MissionToCureThumbnails.png'
import JagsThumbnail from '../../../src/Assets/Images/PortfolioImages/JagsThumbnails.png'


export default function Portfoliotabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const images = document.querySelectorAll('.fade-in');
    images.forEach(image => {
      image.onload = () => {
        image.classList.add('loaded');
      };
    });
  }, [value]);

  return (
    <div className='portfoliotabswidth'>
      <Box sx={{ width: '100%', typography: 'body1', backgroundColor: '#181818' }}>
        <TabContext value={value}  >
          <div className='Portfolio-Filter-Section'>
          <Box className="tabHeadsection" >
            <TabList onChange={handleChange} className='firsttablist' centered >
              <StyledTab  label="All" value="1" selected={value === '1'} />
              </TabList>
              <TabList onChange={handleChange} className='secondtablist' centered >
              <StyledTab label="Web Development " value="2" selected={value === '2'} />

              </TabList>
             
              <TabList onChange={handleChange} className='thirdtablist' centered >
              <StyledTab label="App Development" value="3" selected={value === '3'} />
              </TabList>
              <TabList  onChange={handleChange} className='fourthtablist' centered >
               <StyledTab label="UI / UX" value="5" selected={value === '5'} />
              </TabList>
             
              <TabList  onChange={handleChange} className='fifthtablist' centered >
              <StyledTab label="Branding" value="6" selected={value === '6'} />
              </TabList>
              <TabList  onChange={handleChange} className='sixtablist' centered >
              <StyledTab label="Social Media Marketing" value="7" selected={value === '7'} />

              </TabList>
           
            </Box>
          </div>
          <TabPanel value="1">
            <div className='All-Section'>
            <div className='images-section'>
               <div className='Portfolio-images-section fade-in' >
               <Link to="/fikaacasestudy" style={{textDecoration:"none"}} >
               <img src={FikkaThumnail} alt="" />
               <p>Fikaa</p>
               </Link>
              
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MissonToCureThumbnail} alt="" />
               <p>Misson To Cure</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={JagsThumbnail} alt="" />
               <p>Jags</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt=""/>
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDev} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               </div>
            </div>
        </TabPanel>
        <TabPanel value="2">
        <div className='All-Section'>
        <div className='images-section'>
        <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt=""/>
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDev} alt=""   />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt=""    />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDev} alt=""   />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt=""    />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDev} alt=""   />
               <p>Mobile ID Labs</p>
               </div>
               </div>
            </div>
        </TabPanel>
        <TabPanel value="3">
        <div className='All-Section'>
        <div className='images-section'>
        <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDev} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt=""  />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt=""  />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDev} alt=""  />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt=""    />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDev} alt=""   />
               <p>Mobile ID Labs</p>
               </div>
               </div>
            </div>
        </TabPanel>
        <TabPanel value="4">
        <div className='All-Section'>
               <div className='images-section'>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt=""  />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDev} alt=""  />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt=""   />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDev} alt=""  />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt=""    />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDev} alt=""   />
               <p>Mobile ID Labs</p>
               </div>
               </div>
            </div>
        </TabPanel>
        <TabPanel value="5">
        <div className='All-Section'>
        <div className='images-section'>
        <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDev} alt=""  />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt=""   />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDev} alt=""   />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt=""  />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt=""    />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDev} alt=""   />
               <p>Mobile ID Labs</p>
               </div>
               </div>
            </div>
        </TabPanel>
        <TabPanel value="6">
        <div className='All-Section'>
        <div className='images-section'>
        <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDev} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt=""/>
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDev} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt=""    />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDev} alt=""   />
               <p>Mobile ID Labs</p>
               </div>
               </div>
            </div>
        </TabPanel>
        <TabPanel value="7">
        <div className='All-Section'>
        <div className='images-section'>
        <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDev} alt=""  />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt=""   />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDev} alt=""   />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt=""    />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt=""    />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDev} alt=""   />
               <p>Mobile ID Labs</p>
               </div>
               </div>
            </div>
        </TabPanel>

          {/* Rest of the TabPanel components */}
        </TabContext>
      </Box>
      <div className='portfoliotabsbottom'></div>
    </div>
  );
}

// Custom styled Tab component
// Custom styled Tab component
// Custom styled Tab component
const StyledTab = ({ selected, ...props }) => (
  <Tab
    {...props}
    sx={{
      fontFamily: "DM Sans18ptLight",
      fontSize: "21px",
      fontWeight: "400",
      color:selected ? 'rgba(227, 142, 0, 1)' : 'white',
      background: selected ? 'white' : 'none',
    }}
  />
);

