import React from 'react'
import Navbar from '../shared/Navbar'
import JobCard from './JobCard';
import Footer from '../shared/Footer';
import { useSelector } from 'react-redux';

const topJobs=[1,2,3,4];
const Browse = () => {
  const {allJobs}=useSelector(store=>store.job)
  return (
    <div>
      <Navbar/>
      <div className='max-w-6xl mx-auto'>
        <h1 className='font-bold text-xl my-5'>Search Results({topJobs.length})</h1>
        <div className='grid grid-cols-3 gap-5'>
          {
            allJobs.length <=0 ? <span>No job found</span> :allJobs.map((job)=>{
              return(
                <JobCard key={job._id} job={job} />
              )
            })
          }
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Browse