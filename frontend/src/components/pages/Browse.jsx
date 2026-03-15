import React from 'react'
import Navbar from '../shared/Navbar'
import JobCard from './JobCard';
import Footer from '../shared/Footer';

const topJobs=[1,2,3,4];
const Browse = () => {
  return (
    <div>
      <Navbar/>
      <div className='max-w-6xl mx-auto'>
        <h1 className='font-bold text-xl my-5'>Search Results({topJobs.length})</h1>
        <div className='grid grid-cols-3 gap-5'>
          {
            topJobs.map((item,index)=>{
              return(
                <JobCard/>
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