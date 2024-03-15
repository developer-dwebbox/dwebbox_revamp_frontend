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
        <TabContext value={value}>
          <div className='Portfolio-Filter-Section'>
          <Box className="tabHeadsection" >
            <TabList onChange={handleChange} className='firsttablist' >
              {/* <StyledTab  label="All" value="1" selected={value === '1'} /> */}
              <StyledTab label="Web Development " value="2" selected={value === '2'} />
              <StyledTab label="App Development" value="3" selected={value === '3'} />
              <StyledTab label="UI/UX" value="4" selected={value === '4'} />
              {/* <StyledTab label="Product Management" value="5" selected={value === '5'} /> */}
              <StyledTab label="Branding" value="6" selected={value === '6'} />
              <StyledTab label="Social Media Marketing" value="7" selected={value === '7'} />
            </TabList>
            </Box>
          </div>
          <TabPanel value="1">
            <div className='All-Section'>
            <div className='images-section'>
               <div className='Portfolio-images-section fade-in' >
               <img src={MobileDev} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div className='Portfolio-images-section fade-in'  >
               <img src={MobileDevTwo} alt="" />
               <p>Mobile ID Labs</p>
               </div>
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
      color: 'white',
      backgroundImage: selected ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' : 'none',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor:  selected ? 'transparent' : "none",
      '& .MuiTab-label': { borderBottom: 'none' }
    }}
  />
);

