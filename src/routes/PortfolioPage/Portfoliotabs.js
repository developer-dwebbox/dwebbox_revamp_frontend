import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MobileDev from '../../../src/Assets/Images/PortfolioImages/Rectangle 28.png'
import MobileDevTwo from '../../../src/Assets/Images/PortfolioImages/Rectangle 18.png'
import './Portfoliopage.css';


export default function Portfoliotabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='portfoliotabswidth' >
    <Box sx={{ width: '100%', typography: 'body1' ,backgroundColor: '#181818'}}  >
      <TabContext value={value} >
      <div className='Portfolio-Filter-Section' >
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}} >
          <TabList onChange={handleChange} centered >
            <Tab label="All" value="1" sx={{ color: 'white', backgroundColor: value === '1' ? '#F17C24' : 'transparent',borderRadius:"30px"}} />
            <Tab label="Mobile Solutions" value="2" sx={{ color: 'white', backgroundColor: value === '2' ? '#F17C24' : 'transparent',borderRadius:"30px"}} />
            <Tab label="Product Design" value="3" sx={{ color: 'white', backgroundColor: value === '3' ? '#F17C24' : 'transparent',borderRadius:"30px" }} />
            <Tab label="Product Design" value="4" sx={{ color: 'white', backgroundColor: value === '4' ? '#F17C24' : 'transparent',borderRadius:"30px" }} />
            <Tab label="Mobile Solutions" value="5" sx={{ color: 'white', backgroundColor: value === '5' ? '#F17C24' : 'transparent',borderRadius:"30px" }} />
          </TabList>
        </Box>
        </div>
        <TabPanel value="1">
            <div className='All-Section'>
            <div className='images-section'>
               <div>
               <img src={MobileDev} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDevTwo} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDev} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDevTwo} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               </div>
            </div>
        </TabPanel>
        <TabPanel value="2">
        <div className='All-Section'>
        <div className='images-section'>
               <div>
               <img src={MobileDevTwo} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDev} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDevTwo} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDev} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               </div>
            </div>
        </TabPanel>
        <TabPanel value="3">
        <div className='All-Section'>
        <div className='images-section'>
               <div>
               <img src={MobileDev} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDevTwo} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDevTwo} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDev} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               </div>
            </div>
        </TabPanel>
        <TabPanel value="4">
        <div className='All-Section'>
               <div className='images-section'>
               <div>
               <img src={MobileDevTwo} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDev} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDevTwo} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDev} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               </div>
            </div>
        </TabPanel>
        <TabPanel value="5">
        <div className='All-Section'>
        <div className='images-section'>
               <div>
               <img src={MobileDev} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDevTwo} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDev} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               <div>
               <img src={MobileDevTwo} alt="" />
               <p>Mobile ID Labs</p>
               </div>
               </div>
            </div>
        </TabPanel>
      </TabContext>
    </Box>
    <div className='portfoliotabsbottom' >

    </div>
    </div>
  );
}
