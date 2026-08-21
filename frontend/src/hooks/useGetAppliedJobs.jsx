import { setAppliedJobs } from '@/redux/jobSlice'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'

const useGetAppliedJobs = () => {
    const dispatch =useDispatch()
  useEffect(() => {
    const fetchAppliedJobs =async()=>{
      try {
        const res =await axios.get(`${import.meta.env.VITE_APPLICATION_API_END_POINT}/getAppliedJob`,{withCredentials:true})
        if(res.data.success){
          dispatch(setAppliedJobs(res.data.application))
        }
      } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
      }
    }
    fetchAppliedJobs()
  }, [])
}

export default useGetAppliedJobs