import React from 'react'
import JobCards from './LatestJobCards'
import { useSelector } from 'react-redux'

const jobs=[1,2,3,4,5,6,7,8]
const LatestJobs = () => {
  const {allJobs}= useSelector(store=>store.job)
  return (
    <div className='max-w-6xl mx-auto'>
        <h1 className='text-4xl font-bold'><span className='text-violet-600'>Latest & Top</span> Job Openings</h1>
        <div className="grid grid-cols-3 gap-6 my-8">
        {allJobs.lenght <= 0 ? <span>job not available</span> :allJobs.slice(0,6).map((job)=><JobCards key={job._id}  job={job}/>)}
        </div>
    </div>
  )
}

export default LatestJobs