import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'

const Signup = () => {
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
        role: "",
        phoneNumber: "",
        file: null
    })
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] })
    }
    const {loading}=useSelector(store=>store.auth)
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const submitHandler = async (e) => {
        e.preventDefault();
        
        const formData = new FormData() // form data ka use agar koi image pdf or file bhejna ho to nahi to simple json me bhej sakte hai
        formData.append("username", input.username)
        formData.append("email", input.email)
        formData.append("phoneNumber", input.phoneNumber)
        formData.append("password", input.password)
        formData.append("role", input.role)
        if (input.file) {
            formData.append("file", input.file)
        }
        try {
            dispatch(setLoading(true))
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            })
            
            if (res.data.success) {
                navigate("/login")
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }
    return (
        <div>
            <Navbar />
            <div className=" max-w-6xl flex items-center justify-center mx-auto ">
                <div className=" w-1/2 flex items-center justify-center flex-col mx-auto mt-6 bg-gray-100 border rounded-4xl">
                    <h1 className='text-2xl font-bold '>Sign up</h1>
                    <form onSubmit={submitHandler} className='w-full py-6 px-10'>
                        <div>
                            <Label>Username</Label>
                            <Input
                                type="text"
                                placeholder="Enter username"
                                className='mt-2'
                                name="username"
                                value={input.username}
                                onChange={changeEventHandler}
                            />
                        </div>
                        <div className='mt-5'>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                placeholder="Enter email"
                                className='mt-2'
                                name="email"
                                value={input.email}
                                onChange={changeEventHandler}
                            />
                        </div>
                        <div className='mt-5'>
                            <Label>Phone number</Label>
                            <Input
                                type="text"
                                placeholder="Enter Phone number"
                                className='mt-2'
                                name="phoneNumber"
                                value={input.phoneNumber}
                                onChange={changeEventHandler}
                            />
                        </div>
                        <div className='mt-5'>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                placeholder="Enter password"
                                className='mt-2'
                                name="password"
                                value={input.password}
                                onChange={changeEventHandler}
                            />
                        </div>
                        <div className='mt-5 flex gap-10 items-center'>
                            <RadioGroup defaultValue="comfortable" className="w-fit flex gap-3 mt-4">
                                <div className="flex items-center gap-3">
                                    <Input
                                        className='cursor-pointer'
                                        type="radio"
                                        name="role"
                                        value="student"
                                        checked={input.role === 'student'}
                                        onChange={changeEventHandler}
                                    />
                                    <Label htmlFor="r1">student</Label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Input
                                        className='cursor-pointer'
                                        type="radio"
                                        name="role"
                                        value="recruiter"
                                        checked={input.role === 'recruiter'}
                                        onChange={changeEventHandler}
                                    />
                                    <Label htmlFor="r2">recruiter</Label>
                                </div>
                            </RadioGroup>
                            <div className="">
                                <Label>Profile</Label>
                                <Input
                                    accept="image/*"
                                    type="file"
                                    onChange={changeFileHandler}
                                    className="cursor-pointer mt-2"
                                />
                            </div>
                        </div>

                        <div className='mt-5' >
                            {
                                loading ? <Button className={"w-full"}><Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button className='w-full cursor-pointer' type="submit">Signup</Button>
                            }
                        </div>
                        <div className='mt-5 flex items-center justify-center' >
                            <p>Already have an account?<span><Link to="/login" className='text-blue-600 font-bold cursor-pointer mx-2 ' >login</Link></span></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup