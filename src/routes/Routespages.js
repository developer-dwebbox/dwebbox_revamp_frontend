import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomepageMain from './HomePage/HomepageMain'
import Ourservicessection from './Ourservicespage/Ourservicessection'
import Aboutus from './Aboutus/Aboutus'
import Portfoliopage from './PortfolioPage/Portfoliopage'
import Ourteam from './Ourteams/Ourteam'

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
        }
    ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Routespages
