import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Button } from '../ui/button'

const CategoryCarousel = () => {
    const category = [
        "Backend Developer",
        "Frontend Develper",
        "Data Science",
        "Graphic Designer",
        "Fullstack Developer"
    ]
    return (
        <div>
            <Carousel className="w-full max-w-xl my-15 mx-auto">
                <CarouselContent >
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <Button variant='outline'className="cursor-pointer" >{cat}</Button>
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