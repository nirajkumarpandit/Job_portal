import React from 'react'
import { Button } from '../ui/button'
import {Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { Navigate, useNavigate } from 'react-router-dom'
const JobCard = () => {
  const navigate =useNavigate()
  const jobId="jfkdslfjlksjflksdjf"
  return (
    <div className='shadow-xl border bg-white border-gray-100 px-6 py-2 hover:shadow-gray-400'>
      <div className="flex items-center justify-between">
        <p className='text-gray-400'>2 days ago</p>
        <Button variant='outline' className={"rounded-full cursor-pointer"} size='icon'><Bookmark /></Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button variant='outline' size='icon' className={"p-5 rounded-full"}>
          <Avatar>
            <AvatarImage src="https://www.clipartmax.com/png/middle/270-2703019_pictures-gallery-of-company-logos-design-free-logo-design-3d-png.png" />
          </Avatar>
        </Button>
        <div>
          <h1 className='font-medium text-md'>Company name</h1>
          <p className='text-gray-500 text-sm'>India</p>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-md'>Title</h1>
        <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel expedita fuga dignissimos maxime ipsam eos voluptates. Asperiores quaerat tempora rerum.</p>
      </div>
      <div className='flex gap-3 mt-3 items-center'>
            <Badge className={"text-blue-700 font-bold"} variant='outline'>12 Positions</Badge>
            <Badge className={"text-red-500 font-bold"} variant='outline'>Part time</Badge>
            <Badge className={"text-purple-600 font-bold"} variant='outline'>24LPA</Badge>
        </div>
        <div className='flex my-5 gap-5'>
          <Button onClick={()=>navigate(`/jobDescription/${jobId}`)} className={"bg-violet-600 cursor-pointer hover:bg-violet-800"} >Details</Button>
          <Button className={"cursor-pointer"} variant='outline'>save for later</Button>
        </div>
    </div>
  )
}

export default JobCard