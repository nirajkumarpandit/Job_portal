import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CompanyTable = () => {
    const navigate = useNavigate()
    const { companies ,searchCompanyByText } = useSelector(store => store.company)
    const [filterCompany,setFilterCompany]= useState(companies)

    useEffect(()=>{
        const filteredCompany = companies.length >= 0 && companies.filter((company)=>{
            if(!searchCompanyByText){
                return true
            }
            return company?.companyName?.toLowerCase().includes(searchCompanyByText.toLowerCase())
        })
        setFilterCompany(filteredCompany)
    },[companies,searchCompanyByText])
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
                    companies && companies?.length <= 0 ? (<span>No company register yet</span>) : (
                        filterCompany?.map((company) => (<>
                                <TableBody>
                                    <TableCell>
                                        <Avatar className="h-12 w-12 rounded-xl border border-gray-100 shadow-sm">
                                            <AvatarImage src={company?.logo} />
                                        </Avatar>
                                    </TableCell>
                                    <TableCell>{company?.companyName}</TableCell>
                                    <TableCell>{(company?.createdAt).split("T")[0]}</TableCell>
                                    <TableCell>
                                        <Popover>
                                            <PopoverTrigger className="cursor-pointer" ><MoreHorizontal /></PopoverTrigger>
                                            <PopoverContent className={"w-25"}>
                                                <div className="flex items-center gap-2 cursor-pointer">
                                                    <Edit2 className='w-4' />
                                                    <span onClick={() => navigate(`/company/${company?._id}`)} >Edit</span>
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