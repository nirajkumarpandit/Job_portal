import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'
const AppliedJobTable = () => {
  return (
    <div>
      <h1 className='font-bold text-lg my-3'>Applied jobs</h1>
        <Table>
          <TableHeader>
            <TableRow className={"w-full"} >
              <TableHead >Date</TableHead>
              <TableHead>Job Role</TableHead>
              <TableHead>Company</TableHead>
              <TableHead className={"text-right"}>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>18-02-2026</TableCell>
              <TableCell>Frontend developer</TableCell>
              <TableCell>google</TableCell>
              <TableCell className={"text-right"}><Badge>Pending</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>18-02-2026</TableCell>
              <TableCell>Frontend developer</TableCell>
              <TableCell>google</TableCell>
              <TableCell className={"text-right"}><Badge>Pending</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>18-02-2026</TableCell>
              <TableCell>Frontend developer</TableCell>
              <TableCell>google</TableCell>
              <TableCell className={"text-right"}><Badge>Pending</Badge></TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable