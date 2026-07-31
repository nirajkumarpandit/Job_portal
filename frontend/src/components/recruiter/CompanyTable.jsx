import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CompanyTable = () => {
    const navigate = useNavigate()
    const { companies } = useSelector(store => store.company)
    return (
        <div>
            <Table>
                <TableCaption>List of recent register companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                {
                    companies && companies.lenght <= 0 ? <span>No company register yet</span> : (
                        companies?.map((company) => (
                            <>
                                <TableBody>
                                    <TableCell>
                                        <Avatar className="h-12 w-12 rounded-xl border border-gray-100 shadow-sm">
                                            <AvatarImage src={company.logo} />
                                        </Avatar>
                                    </TableCell>
                                    <TableCell>{company.companyName}</TableCell>
                                    <TableCell>{(company.createdAt).split("T")[0]}</TableCell>
                                    <TableCell>
                                        <Popover>
                                            <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                            <PopoverContent className={"w-25"}>
                                                <div className="flex items-center gap-2 cursor-pointer">
                                                    <Edit2 className='w-4' />
                                                    <span onClick={() => navigate(`/company/${company._id}`)} >Edit</span>
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

export default CompanyTable