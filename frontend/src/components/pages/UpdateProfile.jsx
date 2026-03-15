import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '../ui/dialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { Loader2 } from 'lucide-react'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'


const UpdateProfile = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false)
    const { user } = useSelector(store => store.auth)
    const [input, setInput] = useState({
        username: user?.username,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        skills: user?.profile?.skills?.map(skill => skill),
        bio: user?.profile?.bio,
        file: user?.profile?.resume
    })
    const dispatch=useDispatch()

    const changeEventHandler=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    const submitHandler=async(e)=>{
        e.preventDefault();
        const formData=new FormData()
        formData.append("username",input.username)
        formData.append("email",input.email)
        formData.append("phoneNumber",input.phoneNumber)
        formData.append("bio",input.bio)
        formData.append("skills",input.skills)
        if(input.file){
            formData.append("file",input.file)
        }
        try {
            setLoading(true)
            const res=await axios.post(`${USER_API_END_POINT}/update`,formData,{
                headers:{
                    "Content-Type":'multipart/form-data'
                },
                withCredentials:true
            })
            if(res.data.success){
                dispatch(setUser(res.data.user))
                toast.success(res.data.message)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
       finally{
        setLoading(false)
       }
    }
    const changeFileHandler=(e)=>{
        const file=e.target.files?.[0]
        setInput({...input,file})
    }
    return (
        <div>
            <Dialog open={open} >
                <DialogContent className={"sm:max-w[450px]"} onInteractOutside={() => setOpen(false)} >
                    <DialogHeader>Update details</DialogHeader>
                    <form onSubmit={submitHandler}>
                        <div className="flex gap-4 my-3">
                            <Label htmlFor='username'>Username</Label>
                            <Input
                                placeholder='enter you user name'
                                id="name"
                                name="username"
                                type='text'
                                value={input.username}
                                onChange={changeEventHandler}
                            />
                        </div>
                        <div className="flex gap-4 my-3">
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                placeholder='enter you user email'
                                id="email"
                                name="email"
                                type='text'
                                value={input.email}
                                onChange={changeEventHandler}
                            />
                        </div>
                        <div className="flex gap-4 my-3">
                            <Label htmlFor='number'>Name</Label>
                            <Input
                                placeholder='enter you user number'
                                id="number"
                                name="phoneNumber"
                                type='text'
                                value={input.phoneNumber}
                                onChange={changeEventHandler}
                            />
                        </div>
                        <div className="flex gap-4 my-3">
                            <Label htmlFor='skills'>skills</Label>
                            <Input
                                placeholder='enter you user skills'
                                id="skills"
                                name="skills"
                                type='text'
                                value={input.skills}
                                onChange={changeEventHandler}
                            />
                        </div>
                        <div className="flex gap-4 my-3">
                            <Label htmlFor='bio'>bio</Label>
                            <Input
                                placeholder='enter you user skills'
                                id="bio"
                                name="bio"
                                type='bio'
                                value={input.bio}
                                onChange={changeEventHandler}
                            />
                        </div>
                        <div className="flex gap-3 my-3">
                            <Label htmlFor='file'>Name</Label>
                            <Input
                                placeholder='enter you user name'
                                id="file"
                                name="file"
                                type='file'
                                accept="application/pdf"
                                onChange={changeFileHandler}
                            />
                        </div>
                        <DialogFooter>
                            {
                                loading ? <Button className={"w-full"}><Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button className='w-full cursor-pointer' type="submit">update</Button>
                            }
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdateProfile