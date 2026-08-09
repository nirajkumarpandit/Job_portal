import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompanyTable from './CompanyTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'

const Companies = () => {
  useGetAllCompanies()
  const navigate = useNavigate()
  const [input, setInput] = useState("")
  const dispatch =useDispatch()
    useEffect(() => {
      dispatch(setSearchCompanyByText(input))
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
          <Button className={"cursor-pointer"} onClick ={()=>navigate('/company/create')} >New company</Button>
        </div>
        <CompanyTable/>
      </div>
    </div>
  )
}

export default Companies