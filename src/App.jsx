import ComputerScience from './Pages/ComputerScience'
import SoftwareEngineer from './Pages/SoftwareEngineer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ComputerScience />
    },
    {
      path: "/department-of-software-engineering",
      element: <SoftwareEngineer />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
