import { enrollCourse, publishedCourse } from '@/app/_services'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React from 'react'

function EnrollmentSection({courseDetail}) {

    const {user} = useUser()
    const router = useRouter();

    const enrollOnCourse = async() => {

        if(user){

            await enrollCourse(courseDetail.id, user.primaryEmailAddress.emailAddress).then( async(data)=> {
                console.log(data,"Enrolled")

                if( data){
                    console.log("publishedCourse", data?.createUserEnrollCourse.id)
                    await publishedCourse(data?.createUserEnrollCourse.id)
                    .then((data) => {
                        console.log(data," PUBLISHED")
                    })
                }
            })
        }else{
            router.push('/sign-in')
        }


    }
  return (
    <div>
        {courseDetail.free ?  
        <div  className="mt-5 border rounded-lg p-2 text-center">
            <h2 className="text-gray-500">Learn and Build Project, Access Source Code and Track Your Progress</h2>
            <button className="p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700" onClick={()=>enrollOnCourse()}>Enroll Now</button>
        </div>: 
        <div  className="mt-5 border rounded-lg p-2 text-center">
            <h2 className="text-gray-500">Buy this course, Source Code and Track Your Progress</h2>
            <button className="p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700">Buy course for $1.99</button>
        </div>
        }
         <div  className="mt-5 border rounded-lg p-2 text-center">
            <h2 className="text-gray-500">Buy Monthly Membership, Access Source Code and Track Your Progress</h2>
            <button className="p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700">Buy Membership for $4.99/Month</button>
        </div>
       
       
    </div>
  )
}

export default EnrollmentSection