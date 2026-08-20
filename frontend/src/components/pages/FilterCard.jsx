
import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '@/redux/jobSlice'

const filterArray=[
    {
        filterType:"Location",
        array:["Delhi NCR","Bangalore","Hyderabad","Goa","Mumbai"]
    },
    {
        filterType:"Industry",
        array:["Frontend developer","Full stack developer", "Backend developer"]
    },
    {
        filterType:"Salary",
        array:["0-80k","42-1lakh","1lakh to 5lakh"]
    },
]
const FilterCard = () => {
    const [selectedValue , setSelectedValue]=useState('');
    const dispatch =useDispatch()
    const filterHandler=(value)=>{
        setSelectedValue(value)
    }
    useEffect(()=>{
        dispatch(setSearchQuery(selectedValue))
    },[selectedValue])
  return (
    <div>
        <h1 className='text-xl font-bold  mb-2'>Filter Job</h1>
        <hr />
        <RadioGroup value={selectedValue} onValueChange={filterHandler} >
            {
                filterArray.map((data,index)=>(
                   <div key={index}>
                    <h1 className='text-lg font-medium'>{data.filterType}</h1>
                    {
                        data.array.map((item,idx)=>{
                            const itemId =`id${index}-${idx}`
                            return(
                                <div className='flex gap-3 my-2 text-sm' key={itemId}>
                                    <RadioGroupItem className={"cursor-pointer"} key={itemId} value={item}/>
                                    <Label htmlFor={itemId} >{item}</Label>
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