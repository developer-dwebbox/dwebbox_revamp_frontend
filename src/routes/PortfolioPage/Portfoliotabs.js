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
            <TabList onChange={handleChange} centered>
              <StyledTab label="All" value="1" selected={value === '1'} />
              <StyledTab label="Mobile Solutions" value="2" selected={value === '2'} />
              <StyledTab label="Product Design" value="3" selected={value === '3'} />
              <StyledTab label="Product Design" value="4" selected={value === '4'} />
              <StyledTab label="Mobile Solutions" value="5" selected={value === '5'} />
            </TabList>
          </div>
          <TabPanel value="1">
            <div className='All-Section'>
            <div className='images-section'>
               <div>
               
               <img src={MobileDev} alt="" className="fade-in" />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDevTwo} alt="" className="fade-in"  />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDev} alt="" className="fade-in"  />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDevTwo} alt="" className="fade-in" />
               <p>Mobile ID Labs</p>
               </div>
               </div>
            </div>
        </TabPanel>
        <TabPanel value="2">
        <div className='All-Section'>
        <div className='images-section'>
               <div>
               <img src={MobileDevTwo} alt="" className="fade-in"  />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDev} alt="" className="fade-in"  />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDevTwo} alt=""  className="fade-in"  />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDev} alt="" className="fade-in"  />
               <p>Mobile ID Labs</p>
               </div>
               </div>
            </div>
        </TabPanel>
        <TabPanel value="3">
        <div className='All-Section'>
        <div className='images-section'>
               <div>
               <img src={MobileDev} alt="" className="fade-in"  />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDevTwo} alt="" className="fade-in"  />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDevTwo} alt="" className="fade-in"  />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDev} alt="" className="fade-in"  />
               <p>Mobile ID Labs</p>
               </div>
               </div>
            </div>
        </TabPanel>
        <TabPanel value="4">
        <div className='All-Section'>
               <div className='images-section'>
               <div>
               <img src={MobileDevTwo} alt="" className="fade-in"  />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDev} alt="" className="fade-in"  />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDevTwo} alt="" className="fade-in"  />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDev} alt="" className="fade-in"  />
               <p>Mobile ID Labs</p>
               </div>
               </div>
            </div>
        </TabPanel>
        <TabPanel value="5">
        <div className='All-Section'>
        <div className='images-section'>
               <div>
               <img src={MobileDev} alt="" className="fade-in"  />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDevTwo} alt="" className="fade-in"  />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDev} alt="" className="fade-in"  />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDevTwo} alt=""   className="fade-in" />
               <p>Mobile ID Labs</p>
               </div>
               </div>
            </div>
        </TabPanel>

          {/* Rest of the TabPanel components */}
        </TabContext>
      </Box>
      <div className='portfoliotabsbottom' ></div>
    </div>
  );
}

// Custom styled Tab component
// Custom styled Tab component
// Custom styled Tab component
const StyledTab = ({ selected, ...props }) => (
    <Tab {...props} sx={{ fontFamily:"DM Sans18ptLight",
    fontSize:"21px",
    fontWeight:"400",
     color: 'white',
     margin:"0px 15px",
     color: selected ? '#F17C24' : 'white',
        '& .MuiTab-label': { borderBottom: 'none' } }} />
  );
  
  