import React from 'react'
import Navbar from '../shared/Navbar'
import JobCard from './JobCard'
import FilterCard from './FilterCard'
import { useSelector } from 'react-redux'

const jobs = [1, 2, 3, 4, 5,6]
const Jobs = () => {
  const {allJobs}= useSelector(store=>store.job)
  return (
    <div>
      <Navbar />
      <div className=" flex max-w-6xl mx-auto mt-5">
        <div className='w-[20%] mr-6'>
          <FilterCard/>
        </div>
        <div >
          {
            allJobs.length <= 0 ? <span>job not found</span> : (
              <div className=' flex flex-1 h-[86vh] overflow-y-auto' >
                <div className='grid grid-cols-3 gap-4'>
                  {
                    allJobs.map((job) => (
                      <div>
                       <JobCard key={job._id} job={job} />
                      </div>
                    ))
                  }
                </div>
              </div>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default Jobs