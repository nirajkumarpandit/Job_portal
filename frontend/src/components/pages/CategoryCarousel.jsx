import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '@/redux/jobSlice'

const CategoryCarousel = () => {
    const category = [
        "Backend Developer",
        "Frontend Developer",
        "Data Science",
        "Graphic Designer",
        "Fullstack Developer"
    ]
    const dispatch =useDispatch()
    const navigate = useNavigate()
    const searchHandler =(query)=>{
        dispatch(setSearchQuery(query))
        navigate('/browse')
    }
    return (
        <div>
            <Carousel className="w-full max-w-xl my-15 mx-auto">
                <CarouselContent >
                    {
                        category.map((cat, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <Button onClick={()=>searchHandler(cat)} variant='outline'className="cursor-pointer" >{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious/>
                 <CarouselNext/>
            </Carousel>
        </div>
    )
}

export default CategoryCarousel