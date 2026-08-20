import React, { useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'
import { useSelector } from 'react-redux'
const AppliedJobTable = () => {
  const { appliedJobs } = useSelector(store => store.job)
  return (
    <div>
      <h1 className='font-bold text-lg my-3'>Applied jobs</h1>
      <Table >
        <TableHeader>
          <TableRow className={"w-full"} >
            <TableHead >Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className={"text-right"}>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            appliedJobs && appliedJobs.length === 0 ? <TableRow><TableCell>No job applied yet</TableCell></TableRow> :
              appliedJobs.map((job) => (
                <TableRow key={job._id}>
                  <TableCell>{job?.createdAt?.split("T")[0]}</TableCell>
                  <TableCell>{job?.job[0]?.title}</TableCell>
                  <TableCell>{job?.job[0]?.company?.companyName}</TableCell>
                  <TableCell className={"text-right"}><Badge className={` ${job?.status === "pending"
                      ? "bg-yellow-500 hover:bg-yellow-500"
                      : job?.status === "accepted"
                        ? "bg-green-500 hover:bg-green-500"
                        : job?.status === "rejected"
                          ? "bg-red-500 hover:bg-red-500"
                          : ""
                    }`}>{job?.status}</Badge></TableCell>
                </TableRow>
              ))
          }
        </TableBody>
      </Table>

    </div>
  )
}

export default AppliedJobTable