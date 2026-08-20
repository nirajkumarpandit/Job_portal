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
import { Avatar, AvatarImage } from '../ui/avatar'
import { Edit} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaTrash } from 'react-icons/fa'
const CompanyTable = () => {
    const navigate = useNavigate()

    const { companies, searchCompanyByText } = useSelector(
        (store) => store.company
    )

    const [filterCompany, setFilterCompany] = useState(companies)

    useEffect(() => {
        const filteredCompany = companies.filter((company) => {
            if (!searchCompanyByText) {
                return true
            }

            return company?.companyName
                ?.toLowerCase()
                .includes(searchCompanyByText.toLowerCase())
        })

        setFilterCompany(filteredCompany)
    }, [companies, searchCompanyByText])

    return (
        <div>
            <Table>
                <TableCaption>
                    List of recent registered companies
                </TableCaption>

                <TableHeader >
                    <TableRow className={"flex items-center justify-between"}>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {companies.length === 0 ? (
                        <TableRow>
                            <TableCell
                                colSpan={4}
                                className="text-center"
                            >
                                No company registered yet
                            </TableCell>
                        </TableRow>
                    ) : filterCompany.length === 0 ? (
                        <TableRow>
                            <TableCell
                                colSpan={4}
                                className="text-center"
                            >
                                No matching companies found
                            </TableCell>
                        </TableRow>
                    ) : (
                        filterCompany.map((company) => (
                            <TableRow key={company._id} className={"flex items-center justify-between"}>
                                <TableCell>
                                    <Avatar className="h-12 w-12 rounded-xl border border-gray-100 shadow-sm">
                                        <AvatarImage
                                            src={company?.logo}
                                            alt={company?.companyName}
                                        />
                                    </Avatar>
                                </TableCell>

                                <TableCell>
                                    {company?.companyName}
                                </TableCell>

                                <TableCell>
                                    {company?.createdAt?.split('T')[0]}
                                </TableCell>

                                <TableCell className={"flex gap-4 items-center "}>
                                    <Edit className='w-4 cursor-pointer hover:text-blue-700' onClick={() =>
                                        navigate(
                                            `/company/${company?._id}`
                                        )
                                    } />
                                    <FaTrash className='w-4 text-red-700 cursor-pointer' />
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default CompanyTable