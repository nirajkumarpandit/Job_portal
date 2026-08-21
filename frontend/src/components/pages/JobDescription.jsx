import React, { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { setSingleJob } from '@/redux/jobSlice'

const JobDescription = () => {
    const { jobId } = useParams()
    const { singleJob } = useSelector(store => store.job)
    const dispatch = useDispatch()
    const { user } = useSelector(store => store.auth)
    const isInitialApplied = singleJob?.applications?.some(application=>application.applicant=== user?._id) || false
    const [isApplied, setIsApplied] = useState(isInitialApplied)
    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true })
            if (res.data.success) {
                setIsApplied(true)
                const updateSingleJob = {
                    ...singleJob,
                    applications: [...singleJob.applications,{applicant:user?._id}]
                }
                dispatch(setSingleJob(updateSingleJob))
                toast.success(res.data.message)
            }
        } catch (error) {
            console.error(error)
            toast.error(error.response?.data?.message)
        }
    }
    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true })
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job))
                    setIsApplied(res?.data?.job?.applications?.some(application=>application.applicant === user?._id))
                }
            } catch (error) {
                console.log(error)
            }
        }
        if (jobId) {
            fetchSingleJob()
        }
    }, [jobId])
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
                        onClick={isApplied ? null : applyJobHandler}
                        disabled={isApplied}
                        className={`rounded-lg ${isApplied ? "cursor-not-allowed bg-gray-700  hover:bg-gray-700 " : "bg-violet-600 cursor-pointer hover:bg-violet-800"}`}>
                        {isApplied ? "Already Applied" : "Apply now"}
                    </Button>
                </div>
                <div className="border-b-2 border-b-gray-300 mt-5 pb-2 font-medium">{singleJob?.description}</div>
                <div className="">
                    <h1 className='font-bold'>Role : <span className='font-medium text-gray-700'>{singleJob?.title}</span></h1>
                    <h1 className='font-bold'>Description : <span className='font-medium text-gray-700'>{singleJob?.description}</span></h1>
                    <h1 className='font-bold'>Location : <span className='font-medium text-gray-700'>{singleJob?.location}</span></h1>
                    <h1 className='font-bold'>Salary : <span className='font-medium text-gray-700'>{singleJob?.salary}LPA</span></h1>
                    <h1 className='font-bold'>Total application : <span className='font-medium text-gray-700'>{singleJob?.applications?.length}</span></h1>
                    <h1 className='font-bold'>Post date : <span className='font-medium text-gray-700'>{new Date(singleJob?.createdAt).toLocaleDateString()}</span></h1>
                </div>
            </div>
        </div>
    )
}

export default JobDescription