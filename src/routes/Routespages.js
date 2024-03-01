import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomepageMain from './HomePage/HomepageMain'
import Ourservicessection from './Ourservicespage/Ourservicessection'
import Aboutus from './Aboutus/Aboutus'
import Portfoliopage from './PortfolioPage/Portfoliopage'

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
        }
    ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Routespages
