import React from 'react'
import { Badge } from '../ui/badge'

const JobCards = () => {
  return (
    <div className='p-5 shadow-xl rounded-md border bg-white border-gray-100 cursor-pointer hover:shadow-gray-400 '>
        <div className="">
            <h1 className='text-lg font-medium'>Company name</h1>
            <p className='text-gray-700 text-sm'>India</p>
        </div>
        <div>
            <h1 className='text-lg font-medium'>Title</h1>
            <p className='text-gray-700 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet. elit. Dolor, eaque?</p>
        </div>
        <div className='flex gap-3 mt-3 items-center'>
            <Badge className={"text-blue-700 font-bold"} variant='outline'>12 Positions</Badge>
            <Badge className={"text-red-500 font-bold"} variant='outline'>Part time</Badge>
            <Badge className={"text-purple-600 font-bold"} variant='outline'>24LPA</Badge>
        </div>
    </div>
  )
}

export default JobCards