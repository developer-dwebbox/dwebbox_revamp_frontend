import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomepageMain from './HomePage/HomepageMain'
import Ourservicessection from './Ourservicespage/Ourservicessection'
function Routespages() {
    const router = createBrowserRouter([
        {
          path:"/",
          element: <HomepageMain/>
        },
        {
          path:"/ourservice",
          element: <Ourservicessection/>
        }
    ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Routespages
