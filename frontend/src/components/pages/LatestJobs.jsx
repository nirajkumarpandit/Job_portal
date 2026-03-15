import React from 'react'
import JobCards from './LatestJobCards'

const jobs=[1,2,3,4,5,6,7,8]
const LatestJobs = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <h1 className='text-4xl font-bold'><span className='text-violet-600'>Latest & Top</span> Job Openings</h1>
        <div className="grid grid-cols-3 gap-6 my-8">
        {jobs.slice(0,6).map((items,index)=><JobCards/>)}
        </div>
    </div>
  )
}

export default LatestJobs