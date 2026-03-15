
import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

const filterArray=[
    {
        filterType:"Location",
        array:["Delhi NCR","Bangalore","Hyderabad","Pune","Mumbai"]
    },
    {
        filterType:"Industry",
        array:["Frontend Developer","Fullstack developer", "Backend developer"]
    },
    {
        filterType:"Salary",
        array:["0-80k","42-1lakh","1lakh to 5lakh"]
    },
]
const FilterCard = () => {
  return (
    <div>
        <h1 className='text-xl font-bold  mb-2'>Filter Job</h1>
        <hr />
        <RadioGroup>
            {
                filterArray.map((data,index)=>(
                   <div>
                    <h1 className='text-lg font-medium'>{data.filterType}</h1>
                    {
                        data.array.map((item,index)=>{
                            return(
                                <div className='flex gap-3 my-2 text-sm'>
                                    <RadioGroupItem className={"cursor-pointer"} value={item}/>
                                    <Label>{item}</Label>
                                </div>
                            )
                        })
                    }
                   </div>
                ))
            }
        </RadioGroup>
    </div>
  )
}

export default FilterCard