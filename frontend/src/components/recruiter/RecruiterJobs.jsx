import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompanyTable from './CompanyTable'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import RecruiterJobTable from './RecruiterJobTable'
import useGetAdminJobs from '@/hooks/useGetAdminJobs'
import { setSearchJobByText } from '@/redux/jobSlice'

const RecruiterJobs = () => {
  useGetAdminJobs()
  const navigate = useNavigate()
  const [input, setInput] = useState("")
  const dispatch =useDispatch()
  useEffect(() => {
    dispatch(setSearchJobByText(input))
  }, [input])
  
  return (
    <div>
      <Navbar />
      <div className="  max-w-4xl mx-auto my-10">
        <div className="flex items-center justify-between mb-9">
          <Input
            className={"w-fit"}
            placeholder="Filter by name"
            onChange={(e)=>setInput(e.target.value)}
            
          />
          <Button className={"cursor-pointer"} onClick ={()=>navigate('/job/create')} >New Job</Button>
        </div>
        <RecruiterJobTable/>
      </div>
    </div>
  )
}

export default RecruiterJobs