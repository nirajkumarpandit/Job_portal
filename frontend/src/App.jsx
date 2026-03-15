
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/pages/Home"
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import Jobs from "./components/pages/Jobs"
import Browse from "./components/pages/Browse"
import Profile from "./components/pages/Profile"
import JobDescription from "./components/pages/JobDescription"

const appRouter= createBrowserRouter([
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/jobDescription/:id',
    element:<JobDescription/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },{
    path:"/profile",
    element:<Profile/>
  }
])
function App() {
  return (
    <div>
      <RouterProvider router ={appRouter}/>
    </div>
  )
}

export default App