import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RecruiterJobTable = () => {
    const navigate = useNavigate()
    const {searchJobByText} = useSelector(store => store.job)
    const {allAdminJobs}=useSelector(store=>store.job)
    const [filterJob,setFilterJob]= useState(allAdminJobs)
    useEffect(()=>{
        const filteredJob = allAdminJobs.length >= 0 && allAdminJobs.filter((job)=>{
            if(!searchJobByText){
                return true
            }
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.companyName.toLowerCase().includes(searchJobByText.toLowerCase())
        })
        setFilterJob(filteredJob)
    },[allAdminJobs,searchJobByText])
    return (
        <div>
            <Table>
                <TableCaption>List of recent register companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                {
                    allAdminJobs && allAdminJobs?.length <= 0 ? (<span>No company register yet</span>) : (
                        filterJob?.map((job) => (<>
                                <TableBody>
                                    
                                    <TableCell>{job?.company?.companyName}</TableCell>
                                    <TableCell>{job?.title}</TableCell>
                                    <TableCell>{(job?.createdAt).split("T")[0]}</TableCell>
                                    <TableCell>
                                        <Popover>
                                            <PopoverTrigger className="cursor-pointer" ><MoreHorizontal /></PopoverTrigger>
                                            <PopoverContent className={"w-25"}>
                                                <div className="flex items-center gap-2 cursor-pointer">
                                                    <Edit2 className='w-4' />
                                                    <span onClick={() => navigate(`/company/${job?._id}`)} >Edit</span>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </TableCell>
                                </TableBody>
                            </>
                        ))
                    )
                }
            </Table>
        </div>
    )
}

export default RecruiterJobTable