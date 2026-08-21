import React, { useState, useEffect } from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'

const JobPost = () => {
  useGetAllCompanies()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirement: "",
    location: "",
    experience: 0,
    position: 0,
    salary: 0,
    jobType: '',
    company: ''
  })
  const { companies } = useSelector(store => store.company)

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  const selectChangeHandler =(value)=>{
    const selectedCompany = companies.find((company)=>company.companyName.toLowerCase()=== value)
    setInput({...input, company:selectedCompany._id})
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const res = await axios.post(`${import.meta.env.VITE_JOB_API_END_POINT}/postJob`,input, {
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      })
      if(res.data.success){
        toast.success(res.data.message)
        navigate("/recruiterJob")
      }

    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <Button className={"cursor-pointer"} variant='outline' >
            <ArrowLeft />
            <span onClick={() => navigate('/company/create')} >Back</span>
          </Button>
          <h1 className='font-bold text-xl' >Job Post</h1>
        </div>
        <form onSubmit={submitHandler} >

          <div className="grid grid-cols-2 gap-2.5 mt-5 mb-5">
            <div className="">
              <Label className={'my-2'}>Title</Label>
              <Input
                type={"text"}
                name='title'
                value={input.title}
                onChange={changeEventHandler}
                required
              />
            </div>
            <div className="">
              <Label className={'my-2'} >Description</Label>
              <Input
                type={"text"}
                name='description'
                value={input.description}
                onChange={changeEventHandler}
              />
            </div>
            <div className="">
              <Label className={'my-2'} >Location</Label>
              <Input
                type={"text"}
                name='location'
                value={input.location}
                onChange={changeEventHandler}
              />
            </div>
            <div className="">
              <Label className={'my-2'}>Job Type</Label>
              <Input
                type={"text"}
                name='jobType'
                value={input.jobType}
                onChange={changeEventHandler}
              />
            </div>
            <div className="">
              <Label className={'my-2'}>Position</Label>
              <Input
                type={"Number"}
                name='position'
                value={input.position}
                onChange={changeEventHandler}
              />
            </div>
            <div className="">
              <Label className={'my-2'}>Salary</Label>
              <Input
                type={"Number"}
                name='salary'
                value={input.salary}
                onChange={changeEventHandler}
              />
            </div>
            <div className="">
              <Label className={'my-2'}>Requirement</Label>
              <Input
                type={"text"}
                name='requirement'
                value={input.requirement}
                onChange={changeEventHandler}
              />
            </div>
            <div className="">
              <Label className={'my-2'}>Experience</Label>
              <Input
                type={"Number"}
                name='experience'
                value={input.experience}
                onChange={changeEventHandler}
              />
            </div>
            <div className="">
              <Label className={'my-2'}>Company</Label>
             {
              companies.length >= 0 && (
                 <Select  onValueChange ={selectChangeHandler} >
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="Select a company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {companies.map((company) => (
                      <SelectItem key={company._id} value={company?.companyName.toLowerCase()}>
                        {company.companyName}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              )
             }
             </div>
          </div>
          <div className="flex items-center justify-center">
          {
            loading
              ? <Button disabled className="w-full bg-violet-600 hover:bg-violet-700">
                <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
              </Button>
              : <Button className='w-[50%] bg-violet-600 hover:bg-violet-700 cursor-pointer transition-colors' type="submit">
                Submit
              </Button>
          }
          </div>
        </form>
      </div>
    </div>
  )
}

export default JobPost