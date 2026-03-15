import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

const JobDescription = () => {
    const isApplied = false
    return (
        <div>
            <div className="max-w-4xl mx-auto my-10">
                <div className="flex justify-between">
                    <div>
                        <h1 className='font-bold '>Title</h1>
                        <div className='flex gap-3 mt-3 items-center'>
                            <Badge className={"text-blue-700 font-bold"} variant='outline'>12 Positions</Badge>
                            <Badge className={"text-red-500 font-bold"} variant='outline'>Part time</Badge>
                            <Badge className={"text-purple-600 font-bold"} variant='outline'>24LPA</Badge>
                        </div>
                    </div>
                    <Button
                        disabled={isApplied}
                        className={`rounded-lg ${isApplied ? "cursor-not-allowed bg-gray-700  hover:bg-gray-700 " : "bg-violet-600 cursor-pointer hover:bg-violet-800"}`}>
                        {isApplied ? "Already Applied" : "Apply now"}
                    </Button>
                </div>
                <div className="border-b-2 border-b-gray-300 mt-5 pb-2 font-medium">Job Description</div>
                <div className="">
                    <h1 className='font-bold'>Role : <span className='font-medium text-gray-700'>Frontend developer</span></h1>
                    <h1 className='font-bold'>Description : <span className='font-medium text-gray-700'>Lorem ipsum dolor sit amet.</span></h1>
                    <h1 className='font-bold'>Location : <span className='font-medium text-gray-700'>Siwan</span></h1>
                    <h1 className='font-bold'>Salary : <span className='font-medium text-gray-700'>24LPA developer</span></h1>
                    <h1 className='font-bold'>Total application : <span className='font-medium text-gray-700'>10</span></h1>
                    <h1 className='font-bold'>Post date : <span className='font-medium text-gray-700'>12-2-2027</span></h1>
                </div>
            </div>
        </div>
    )
}

export default JobDescription