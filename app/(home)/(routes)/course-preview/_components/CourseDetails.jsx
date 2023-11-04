import { Book } from 'lucide-react'
import React from 'react'

function CourseDetails({courseDetail}) {
  return (
    <div className="mt-5 p-5 border rounded-lg">
        <h2 className="text-[20px] font-medium">{courseDetail.name}</h2>
        <div className="flex items-center gap-2">
            <Book className="h6 w-6 text-purple-600 rounded-full bg-purple-100 p-1"/>
             <h2 className="text-[12px] text-gray-400">{courseDetail?.totalChapters} Chapters</h2>
        </div>     

        <p className="line-clamp-4 mt-5 text-gray-500">{courseDetail.description}</p>           
    </div>
  )
}

export default CourseDetails