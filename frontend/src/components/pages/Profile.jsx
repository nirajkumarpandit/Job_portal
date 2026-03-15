import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Contact2, Mail, Pen } from 'lucide-react'
import { Badge } from '../ui/badge'
import AppliedJobTable from './AppliedJobTable'
import Footer from '../shared/Footer'
import { Button } from '../ui/button'
import UpdateProfile from './UpdateProfile'
import { useSelector } from 'react-redux'

const Profile = () => {
  let isResume=true
  const [open, setOpen] = useState(false)
  const {user}=useSelector(store=>store.auth)
  return (
    <div>
      <Navbar />
      <div className='max-w-3xl mx-auto my-5 rounded-lg shadow-xl border'>
        <div className="flex items-center mx-4 justify-between my-5">
          <div className='flex items-center gap-3 '>
            <Avatar className={"w-10 h-10"}>
              <AvatarImage src="https://www.clipartmax.com/png/middle/270-2703019_pictures-gallery-of-company-logos-design-free-logo-design-3d-png.png" />
            </Avatar>
            <div>
              <h1 className='font-medium ' >{user?.username}</h1>
              <p className='text-sm text-gray-600'>{user?.profile?.bio}</p>
            </div>
          </div>
          <div>
            <Button onClick={()=>setOpen(true)} variant='outline' className={"cursor-pointer"}><Pen/></Button>
          </div>
        </div>
        <div className="flex mx-4 mt-5 gap-3 items-center">
          <Mail className='w-5 h-5' />
          <p>{user?.email}</p>
        </div>
        <div className="flex mx-4 mt-2 gap-3 items-center">
          <Contact2 className='w-5 h-5' />
          <p>{user?.phoneNumber}</p>
        </div>
        <div className="flex mx-4 mt-3 flex-col">
          <h1 className='font-medium'>Skills</h1>
          <div className='flex gap-3 mt-1 items-center'>
            {
              user?.profile?.skills.length !==0 ? user?.profile?.skills.map((skill,index)=><Badge key={index} >{skill}</Badge>): <span>NA</span>
            }
          </div>
        </div>
        <div className='mx-4 my-4'>
          <h1 className='font-medium'>Resume</h1>
          {
            isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-700 hover:underline'>{user?.profile?.resumeOriginalName}</a>:<span>resume not found</span>
          }
        </div>
      </div>
      <div className='max-w-3xl mx-auto'>
        <AppliedJobTable/>
      </div>
      <UpdateProfile open={open} setOpen={setOpen} />
      <Footer/>
    </div>
  )
}

export default Profile