import React, { useEffect } from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSingleJob } from '@/redux/jobSlice'

const JobDescription = () => {
    const isApplied = true
    const {jobId} =useParams()
    const dispatch =useDispatch()
    useEffect(() => {
        const fetchSingleJob=async()=>{
            try {
                const res =await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true})
                console.log(`${JOB_API_END_POINT}/get/${jobId}`)
                if(res.data.success){
                    console.log(res.data.job)
                    dispatch(setSingleJob(res.data.job))
                }
            } catch (error) {
                console.log(error)
            }
        }
        if(jobId){
            fetchSingleJob()
        }
    }, [jobId])
    const {singleJob}= useSelector(store=>store.job)
    
    return (
        <div>
            <div className="max-w-4xl mx-auto my-10">
                <div className="flex justify-between">
                    <div>
                        <h1 className='font-bold '>{singleJob?.title}</h1>
                        <div className='flex gap-3 mt-3 items-center'>
                            <Badge className={"text-blue-700 font-bold"} variant='outline'>12 Positions</Badge>
                            <Badge className={"text-red-500 font-bold"} variant='outline'>{singleJob?.jobType}</Badge>
                            <Badge className={"text-purple-600 font-bold"} variant='outline'>{singleJob?.salary}LPA</Badge>
                        </div>
                    </div>
                    <Button
                        disabled={isApplied}
                        className={`rounded-lg ${isApplied ? "cursor-not-allowed bg-gray-700  hover:bg-gray-700 " : "bg-violet-600 cursor-pointer hover:bg-violet-800"}`}>
                        {isApplied ? "Already Applied" : "Apply now"}
                    </Button>
                </div>
                <div className="border-b-2 border-b-gray-300 mt-5 pb-2 font-medium">{singleJob?.description}</div>
                <div className="">
                    <h1 className='font-bold'>Role : <span className='font-medium text-gray-700'>Frontend developer</span></h1>
                    <h1 className='font-bold'>Description : <span className='font-medium text-gray-700'>{singleJob?.description}</span></h1>
                    <h1 className='font-bold'>Location : <span className='font-medium text-gray-700'>{singleJob?.location}</span></h1>
                    <h1 className='font-bold'>Salary : <span className='font-medium text-gray-700'>{singleJob?.salary}LPA</span></h1>
                    <h1 className='font-bold'>Total application : <span className='font-medium text-gray-700'>10</span></h1>
                    <h1 className='font-bold'>Post date : <span className='font-medium text-gray-700'>{singleJob?.createdAt}</span></h1>
                </div>
            </div>
        </div>
    )
}

export default JobDescription