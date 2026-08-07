import React, { useState,useEffect } from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setSingleCompany } from '@/redux/companySlice'
import useGetCompanyById from '@/hooks/useGetCompanyById'

const CompanySetup = () => {
  const params = useParams()
  useGetCompanyById(params.id)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const dispatch =useDispatch()
  const [input, setInput] = useState({
    companyName: "",
    description: "",
    location: "",
    website: '',
    file: null
  })
  const { singleCompany } = useSelector(store => store.company)
  const changeEventHandler = (e) => {

    setInput({ ...input, [e.target.name]: e.target.value })
  }
  const changeFileHandler = (e) => {
    const file = e.target.files?.[0]
    setInput({ ...input, file })
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("companyName", input.companyName)
    formData.append("description", input.description)
    formData.append("website", input.website)
    formData.append("location", input.location)
    if (input.file) {
      formData.append("file", input.file)
    }
    try {
      setLoading(true)
      const res = await axios.put(`${COMPANY_API_END_POINT}/update/${params.id}`, formData, {
        headers: {
          "Content-Type": 'multipart/form-data'
        },
        withCredentials: true
      })
      if (res?.data?.success) {
        dispatch(setSingleCompany(res?.data?.company))
        toast.success(res?.data?.message)
        navigate("/companies")
      }
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.message)
    } finally {
      setLoading(false)
    }

  }
  useEffect(() => {
      setInput({
        companyName: singleCompany?.companyName || "",
        description:singleCompany?.description || "",
        location:singleCompany?.location || "",
        website:singleCompany?.website || '',
        file:singleCompany?.file || null
      })
    }, [singleCompany])
  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10">
        <div className="flex items-center justify-between">
            <Button className={"cursor-pointer"} variant='outline' >
              <ArrowLeft />
              <span onClick={()=>navigate('/company/create')} >Back</span>
            </Button>
            <h1 className='font-bold text-xl' >Company setup</h1>
          </div>
        <form onSubmit={submitHandler}>
          
          <div className="grid grid-cols-2 gap-2.5 mt-5 mb-5">
            <div className="">
              <Label className={'my-2'}>Company Name</Label>
              <Input
                type={"text"}
                name='companyName'
                value={input.companyName}
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
              <Label className={'my-2'}>Website</Label>
              <Input
                type={"text"}
                name='website'
                value={input.website}
                onChange={changeEventHandler}
              />
            </div>
            <div className="">
              <Label className={'my-2'}>Logo</Label>
              <Input
                type={"file"}
                accept='image/*'
                onChange={changeFileHandler}
              />
            </div>
          </div>
          {
            loading
              ? <Button disabled className="w-full bg-violet-600 hover:bg-violet-700">
                <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
              </Button>
              : <Button className='w-full bg-violet-600 hover:bg-violet-700 cursor-pointer transition-colors' type="submit">
                Update
              </Button>
          }
        </form>
      </div>
    </div>
  )
}

export default CompanySetup