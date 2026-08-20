import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '../ui/table'
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '../ui/popover'
import { Eye, MoreHorizontal } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaTrash } from 'react-icons/fa'
import { toast } from 'sonner'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant'

const RecruiterJobTable = () => {
    const navigate = useNavigate()

    const { searchJobByText, allAdminJobs } = useSelector(
        (store) => store.job
    )

    const [filterJob, setFilterJob] = useState(allAdminJobs)

    useEffect(() => {
        const filteredJob = allAdminJobs.filter((job) => {
            if (!searchJobByText) {
                return true
            }

            return (
                job?.title
                    ?.toLowerCase()
                    .includes(searchJobByText.toLowerCase()) ||
                job?.company?.companyName
                    ?.toLowerCase()
                    .includes(searchJobByText.toLowerCase())
            )
        })

        setFilterJob(filteredJob)
    }, [allAdminJobs, searchJobByText])

     const jobDeleteHandler =async(id)=>{
        try {
            const res =await axios.get(`${JOB_API_END_POINT}/delete/${id}`,{withCredentials:true})
            if(res.data.success){
                toast.success(res.data.success)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
     }

    return (
        <div>
            <Table>
                <TableCaption>
                    List of recent registered companies
                </TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {allAdminJobs.length === 0 ? (
                        <TableRow>
                            <TableCell
                                colSpan={4}
                                className="text-center"
                            >
                                No company registered yet
                            </TableCell>
                        </TableRow>
                    ) : filterJob.length === 0 ? (
                        <TableRow>
                            <TableCell
                                colSpan={4}
                                className="text-center"
                            >
                                No matching jobs found
                            </TableCell>
                        </TableRow>
                    ) : (
                        filterJob.map((job) => (
                            <TableRow key={job._id}>
                                <TableCell>
                                    {job?.company?.companyName}
                                </TableCell>

                                <TableCell>
                                    {job?.title}
                                </TableCell>

                                <TableCell>
                                    {job?.createdAt?.split('T')[0]}
                                </TableCell>

                                <TableCell>
                                    <Popover>
                                        <PopoverTrigger className="cursor-pointer">
                                            <MoreHorizontal />
                                        </PopoverTrigger>

                                        <PopoverContent className="w-32">
                                            <div
                                                className="flex w-fit items-center gap-2 cursor-pointer"
                                                onClick={() =>
                                                    navigate(
                                                        `/job/${job?._id}/applicant`
                                                    )
                                                }
                                            >
                                                <Eye className="w-4" />
                                                <span>
                                                    Applicants
                                                </span>
                                            </div>
                                            <div
                                                className="flex w-fit items-center gap-2 cursor-pointer"
                                                onClick={() =>{jobDeleteHandler(job._id)} }
                                            >
                                                <FaTrash className="w-4" />
                                                <span>
                                                    delete
                                                </span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default RecruiterJobTable