
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/pages/Home"
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import Jobs from "./components/pages/Jobs"
import Browse from "./components/pages/Browse"
import Profile from "./components/pages/Profile"
import JobDescription from "./components/pages/JobDescription"
import Companies from "./components/recruiter/Companies"
import CreateCompany from "./components/recruiter/CreateCompany"
import CompanySetup from "./components/recruiter/CompanySetup"
import RecruiterJobs from "./components/recruiter/RecruiterJobs"
import JobPost from "./components/recruiter/JobPost"

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
    path:'/jobDescription/:jobId',
    element:<JobDescription/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },{
    path:"/profile",
    element:<Profile/>
  },
  // recruiter ka route
  {
    path :'/companies',
    element :<Companies/>
  },
  {
    path :"/company/create",
    element :<CreateCompany/>
  },
  {
    path :"/company/:id",
    element :<CompanySetup/>
  },
  {
    path :"/recruiterJob",
    element:<RecruiterJobs/>
  },
  {
    path :"/job/create",
    element:<JobPost/>
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