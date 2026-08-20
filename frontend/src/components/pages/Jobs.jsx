import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import JobCard from './JobCard'
import FilterCard from './FilterCard'
import { useSelector } from 'react-redux'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { motion } from "framer-motion"

const Jobs = () => {
  useGetAllJobs()
  const { allJobs, searchQuery } = useSelector(store => store.job)
  const [filterJob, setFilterJob] = useState(allJobs)
  useEffect(() => {
    if (searchQuery) {
      const filteredJob = allJobs.filter((job) => {
        return job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchQuery.toLowerCase())
      })
      setFilterJob(filteredJob)
    } else {
      setFilterJob(allJobs)
    }
  }, [allJobs, searchQuery])


  return (
    <div>
      <Navbar />
      <div className=" flex max-w-6xl mx-auto mt-5 ">
        <div className='w-[30%] mr-6'>
          <FilterCard />
        </div>
        <div >
          {
            filterJob?.length <= 0 ? <span>job not found</span> : (
              <div className=' flex flex-1 h-[86vh] overflow-y-auto hide-scrollbar' >
                <div className='grid grid-cols-3 gap-4 '>
                  {
                    filterJob?.map((job) => (
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        key={job._id}>
                        <JobCard key={job._id} job={job} />
                      </motion.div>
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