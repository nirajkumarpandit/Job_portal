import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setSingleCompany } from '@/redux/companySlice'

const CreateCompany = () => {
    const navigate = useNavigate()
    const [companyName, setCompanyName] = useState('')
    const dispatch =useDispatch()
    const {company}= useSelector(store=>store.company)
    const registerCompany =async()=>{
        try {
            const res= await axios.post(`${COMPANY_API_END_POINT}/register`,{companyName},{
                withCredentials:true
            })
            if(res.data.success){
                dispatch(setSingleCompany(res.data.company))
                toast.success(res.data.message)
                const companyId =res?.data?.company?._id
                navigate(`/company/${companyId}`)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }
    }

    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto my-10">
                <div className="my-5">
                    <h1 className='font-bold text-2xl' >Your company name</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est laboriosam veniam?</p>
                </div>
                <Input
                    type='text'
                    placeholder="Company name"
                    className={'w-full'}
                    onChange={(e)=>setCompanyName(e.target.value)}
                />
                <div className="my-5 flex items-center gap-4">
                    <Button variant='outline' onClick={() => navigate('/companies')} >Cancel</Button>
                    <Button onClick={registerCompany} >Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default CreateCompany