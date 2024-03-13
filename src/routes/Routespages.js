import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import HomepageMain from './HomePage/HomepageMain'
import Ourservicessection from './Ourservicespage/Ourservicessection'
import Aboutus from './Aboutus/Aboutus'
import Portfoliopage from './PortfolioPage/Portfoliopage'
import Ourteam from './Ourteams/Ourteam'
import Contactus from './Contactus/Contactus'
import Ourblogs from './Ourblogs/Ourblogs'
import Ourblogspages from './Ourblogspages/Ourblogspages'
import Clientspage from './Clientspage/Clientspage'
import Productbrandinginner from './Ourservicesinnerpage/Productbrandinginner'
import Uiuxinner from './Ourservicesinnerpage/Uiuxinner'
import Webdevinner from './Ourservicesinnerpage/Webdevinner'
import Appdevinner from './Ourservicesinnerpage/Appdevinner'
import Socialmediainner from './Ourservicesinnerpage/Socialmediainner'
import Productmanagementinner from './Ourservicesinnerpage/Productmanagementinner'
import Seooptimization from './Ourservicesinnerpage/Seooptimization'

function Routespages() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
<Route path='/' element={<HomepageMain/>} />
<Route path='/ourservice' element={<Ourservicessection/>} />
<Route path='/portfolio' element={<Portfoliopage/>} />
<Route path='/aboutus' element={<Aboutus/>} />
<Route path='/ourteam' element={<Ourteam/>} />
<Route path='/contactus' element={<Contactus/>} />
<Route path='/blogs' element={<Ourblogs/>} />
<Route path='/blogspage' element={<Ourblogspages/>} />
<Route path='/clients' element={<Clientspage/>} />
<Route path='/productbranding' element={<Productbrandinginner/>} />
<Route path='/productmanagement' element={<Productmanagementinner/>} />
<Route path='/appdevelopment' element={<Appdevinner/>} />
<Route path='/webdevelopment' element={<Webdevinner/>} />
<Route path='/uiux' element={<Uiuxinner/>} />
<Route path='/socialmedia' element={<Socialmediainner/>} />
<Route path='/seooptimization' element={<Seooptimization/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routespages
