import React from 'react'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'

const HeroSection = () => {
    return (
        <div className="text-center mt-2">
            <div className="flex flex-col mt-10 ">
                <h1 className='text-4xl mt-5 font-bold '>Search, Apply  &<br /> Get Your<span className='text-purple-600 font-bold'>Dream Jobs</span></h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, natus!</span>
                <div className="flex w-[40%] items-center mt-8 shadow-lg pl-4 rounded-full bg-gray-100 mx-auto">
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        className='outline-none border-none w-full'
                    />
                    <Button className=" rounded-r-full w-15 h-10 cursor-pointer bg-violet-600 hover:bg-violet-800">
                        <Search  />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection