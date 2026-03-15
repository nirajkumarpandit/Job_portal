import React from 'react'
import Navbar from '../shared/Navbar'
import JobCard from './JobCard'
import FilterCard from './FilterCard'

const jobs = [1, 2, 3, 4, 5,6]
const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex max-w-6xl mx-auto mt-5">
        <div className='w-[50%] mr-6'>
          <FilterCard/>
        </div>
        <div >
          {
            jobs.length <= 0 ? <span>job not found</span> : (
              <div className=' flex flex-1 h-[86vh] overflow-y-auto' >
                <div className='grid grid-cols-3 gap-4'>
                  {
                    jobs.map((job, index) => (
                      <div>
                       <JobCard/>
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