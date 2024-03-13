import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
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
    const router = createBrowserRouter([
        {
          path:"/",
          element: <HomepageMain/>
        },
        {
          path:"/ourservice",
          element: <Ourservicessection/>
        },{
            path:"/aboutus",
            element:<Aboutus/>
        },{
          path:"/portfolio",
          element:<Portfoliopage/>
        },{
          path:"/ourteam",
          element:<Ourteam/>
        },{
          path:"/contactus",
          element: <Contactus/>
        },{
          path:"/blogs",
          element:<Ourblogs/>
        },{
          path:"/blogspage",
          element:<Ourblogspages/>
        },{
          path:"/clients",
          element:<Clientspage/>
        },{
          path:"/productbranding",
          element:<Productbrandinginner/>
        },{
          path:"/productmanagement",
          element:<Productmanagementinner/>
        },{
          path:"/webdevelopment",
          element:<Webdevinner/>
        },{
          path:"/appdevelopment",
          element:<Appdevinner/>
        },{
          path:"/uiux",
          element:<Uiuxinner/>
        },{
          path:"/socialmedia",
          element:<Socialmediainner/>
        },{
          path:"/seooptimization",
          element:<Seooptimization/>
        }
    ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Routespages
