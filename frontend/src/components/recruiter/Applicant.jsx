import React from 'react'
import Navbar from '../shared/Navbar'
import ApplicantTable from './ApplicantTable'
import useGetAllApplicant from '@/hooks/useGetAllApplicant'
import { useSelector } from 'react-redux'

const Applicant = () => {
    useGetAllApplicant()
    const {allApplicant} =useSelector(store=>store.applicant)
  return (
    <div>
        <Navbar/>
        <div className="max-w-6xl m-auto">
            <h1 className='pb-5'>Applicants({allApplicant.length})</h1>
            <ApplicantTable/>
        </div>
    </div>
  )
}

export default Applicant