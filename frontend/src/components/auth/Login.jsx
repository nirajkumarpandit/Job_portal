import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'
const Login = () => {

  const [input, setInput] = useState({
    email: "",
    password: "",
    role: ""
  })

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  const{loading}=useSelector(store=>store.auth)
  const navigate = useNavigate()
  const dispatch= useDispatch()
  const submitHandler = async (e) => { // yaha koi file nahi bheja ja raha to formdata ka use nahi hoga
    e.preventDefault();
    try {
      dispatch(setLoading(true))
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      if (res.data.success) {
        dispatch(setUser(res.data.user))
        navigate("/")
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || "Login failed / Server not reachable")
    }
    finally{
      dispatch(setLoading(false))
    }
  }
  return (
    <div>
      <Navbar />
      <div className=" max-w-6xl flex items-center justify-center mx-auto ">
        <div className=" w-1/2 pt-4 flex items-center justify-center flex-col mx-auto mt-10 bg-gray-100 border rounded-4xl">
          <h1 className='text-2xl font-bold '>Login</h1>
          <form onSubmit={submitHandler} className='w-full py-6 px-10'>
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
            <div className="mt-5">
              <RadioGroup defaultValue="comfortable" className="w-fit flex gap-3">
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
            </div>
            <div className='mt-5' >
              {
                loading ?<Button className={"w-full"}><Loader2 className='mr-2 h-4 w-4 animate-spin'/> Please wait </Button>: <Button className='w-full cursor-pointer' type="submit">Login</Button>
              }
            </div>
            <div className='mt-5 flex items-center justify-center' >
              <p>Don't have an account?<span><Link to="/signup" className='text-blue-600 font-bold cursor-pointer mx-2 ' >Signup</Link></span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login