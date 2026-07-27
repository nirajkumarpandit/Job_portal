import React, { Profiler } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '../ui/popover'

import {
    Avatar,
    AvatarImage,
} from '../ui/avatar'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { useDispatch, useSelector} from 'react-redux'
import { LogOut, User2Icon } from 'lucide-react'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'
 
const Navbar = () => {
    const { user } = useSelector(store => store.auth)
    const dispatch = useDispatch()
 const navigate =useNavigate()
const logoutHandler =async()=>{
    try {
        const res =await axios.post(`${USER_API_END_POINT}/logout` ,{withCredentials: true})
        if (res.data.success) {
            dispatch(setUser(null))
            navigate('/')
        toast.success(res.data.message)
      }
    } catch (error) {
        console.log(error)
      toast.error(error.response?.data?.message || "logout failed ")
    }
}
    return (
        <div className='bg-white'>
            <div className="flex items-center justify-between h-16 max-w-6xl mx-auto">
                <div>
                    <Link to="/"><h2 className='font-bold text-2xl'>Jobs <span className='text-[#f83002]'>Portal</span></h2></Link>
                </div>
                <div className='flex gap-8 items-center'>
                    <ul className='flex items-center gap-4 font-medium'>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/jobs" >Jobs</Link></li>
                        <li><Link to="/browse" >Browser</Link></li>
                    </ul>
                    {
                        !user ? (
                            <div className='flex gap-4'>
                                <Link to="/login"><Button className={"cursor-pointer"} variant='outline'>Login</Button></Link>
                                <Link to="/signup"><Button className="cursor-pointer bg-violet-600 hover:bg-violet-800" >Sign up</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar>
                                        <AvatarImage className={"cursor-pointer"} src={user?.profile?.profilePhoto} />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <div className="mx-5 flex gap-3.5">
                                        <Avatar>
                                            <AvatarImage src={user?.profile?.profilePhoto} />
                                        </Avatar>
                                        <div className="">
                                            <h1 className='font-bold text-sm '>Niraj frontend developer</h1>
                                            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                    <div className="mx-5 my-3 flex gap-5">
                                        <User2Icon />
                                        <Link to="/profile" className='font-medium text-sm hover:underline text-blue-600'>View Profile</Link>
                                    </div>
                                    <div className="mx-5 flex gap-5">
                                        <LogOut />
                                        <Link onClick={logoutHandler} className='font-medium text-sm hover:underline text-blue-600'>Logout</Link>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar