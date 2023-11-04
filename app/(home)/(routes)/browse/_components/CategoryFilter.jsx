'use client'
import React ,{useState} from 'react'

function CategoryFilter() {
    const [activeIndex, setActiveIndex] = useState()
    const filterOptions = [
        {
            id:1,
            name:"All",
            value: "all"
        },
        {
            id:2,
            name:"React Js",
            value: "react"
        },
        {
            id:3,
            name:"Tailwind",
            value: "tailwind"
        },
        {
            id:4,
            name:"Firebase",
            value: "firebase"
        },
        {
            id:5,
            name:"Supabase",
            value: "supabase"
        }
    ]
  return (
    <div className="flex gap-5">
        { filterOptions.map((item , index) => (
            <button key={index}  
            onClick={()=> {setActiveIndex(index)}}
            className={`border p-2 px-4 text-[12px] rounded-md hover:border-purple-800 font-semibold hover:bg-gray-50 ${activeIndex == index ? 'border-purple-800 bg-purple-50 text-purple-800': null}`}>
                <h2>{item.name}</h2>
            </button>
        ))}
    </div>
  )
}

export default CategoryFilter