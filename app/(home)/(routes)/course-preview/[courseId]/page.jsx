'use client'
import React,{ useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getCourseById } from '@/app/_services'
import VideoPlayer from '../_components/VideoPlayer'
import CourseDetails from '../_components/CourseDetails'
import OptionsSection from '../_components/OptionsSection'
import EnrollmentSection from '../_components/EnrollmentSection'
import { useUser } from '@clerk/nextjs'

function CoursePreview() {
  const params = useParams()
  const [courseDetail, setCourseDetail] = useState(null)

  const {user} =  useUser()

  useEffect(()=>{
    console.log("params.courseId", user?.primaryEmailAddress?.emailAddress)
    params.courseId ? getCourse(): null
  },[user])

   const getCourse =  () => {
    getCourseById(params.courseId, user?.primaryEmailAddress?.emailAddress).then((data) => {
      console.log(data)
      setCourseDetail(data.courseList)
    })
   }

  return courseDetail?.name && (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-2 border rounded-lg p-3">
          <VideoPlayer videoUrl={courseDetail?.chapter[0]?.video?.url}/>
          <CourseDetails courseDetail={courseDetail} />
        </div>
        <div className="col-span-1 mt-5 md:mt-0">
         <OptionsSection/>
         <EnrollmentSection courseDetail={courseDetail}/>
        </div>
      </div>

    </div>
  )
}

export default CoursePreview