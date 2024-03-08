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
        }
    ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Routespages
