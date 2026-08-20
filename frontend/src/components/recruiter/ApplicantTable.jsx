import React from 'react'
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
import {MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'
import axios from 'axios'
import { APPLICATION_API_END_POINT } from '@/utils/constant'

const ApplicantTable = () => {
    const { allApplicant } = useSelector(store => store.applicant)
    const statusHandler = async (status,id) => {
        try {
            const res = await axios.put(`${APPLICATION_API_END_POINT}/status/${id}/update`,{status},{withCredentials:true})
            if(res.data.success){
                toast.success(res.data.message)
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
                        <TableHead>Full Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {allApplicant.length === 0 ? (
                        <TableRow>
                            <TableCell
                                colSpan={4}
                                className="text-center"
                            >
                                No Applicant apply yet
                            </TableCell>
                        </TableRow>
                    ) : allApplicant.length === 0 ? (
                        <TableRow>
                            <TableCell
                                colSpan={4}
                                className="text-center"
                            >
                                No matching jobs found
                            </TableCell>
                        </TableRow>
                    ) : (
                        allApplicant.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell>
                                    {item?.applicant?.username}
                                </TableCell>
                                <TableCell>
                                    {item?.applicant?.email}
                                </TableCell>
                                <TableCell>
                                    {item?.applicant?.phoneNumber}
                                </TableCell>
                                <TableCell>
                                    {item?.applicant?.profile?.resume ? (<a target='_blank' className='text-blue-600' href={item?.applicant?.profile?.resume}>{item?.applicant?.profile?.resumeOriginalName}</a>) : <span>NA</span>
                                    }
                                </TableCell>
                                <TableCell>
                                    {item?.applicant?.createdAt?.split('T')[0]}
                                </TableCell>
                                <TableCell>
                                    <Popover>
                                        <PopoverTrigger className="cursor-pointer">
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-28 h-18 flex flex-col items-center justify-center gap-2">
                                            <button
                                                className="w-fit rounded cursor-pointer"
                                                onClick={() => statusHandler("Accepted",item._id)}
                                            >
                                                Accepted
                                            </button>
                                            <button
                                                className="w-fit rounded cursor-pointer"
                                                onClick={() => statusHandler("Rejected",item._id)}
                                            >
                                                Rejected
                                            </button>
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

export default ApplicantTable