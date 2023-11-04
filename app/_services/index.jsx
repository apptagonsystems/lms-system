import request, { gql } from "graphql-request";

const MASTER_URL = "https://api-eu-west-2.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_KEY+"/master";


export const getCourseList = async() => {
    const query = gql`
        query courseList {
            courseLists {
            id
            name
            free
            tag
            banner {
              url
            }
            totalChapters
            author
            publishedAt
            createdAt
            updatedAt
            }
        }
    `

    const result = await request(MASTER_URL, query)

    return result;
}


export const getCourseById = async (id, userEmail) =>{

    const query = gql`
    query course{
        courseList(where: {id: "`+id+`"}){
          id
          name
          free
          totalChapters
          description
          chapter {
            ... on Chapter{
              id
              name
              video {
                url
              }
              youtubeUrl
            }
          }
        }

        userEnrollCourses(where: {courseId: "`+id+`", userEmail: "`+userEmail+`"}){
            courseId,
            userEmail
            completedChapter
          }
      }
    `
    const result = await request(MASTER_URL, query)

    return result;
}


export const enrollCourse =  async(courseId, userEmail) => {
    const mutation = gql`
        mutation EnrollCourse {
            createUserEnrollCourse(data: {userEmail: "`+userEmail+`", courseId: "`+courseId+`"}){
            id
            }
        }
    `
    const result = await request(MASTER_URL, mutation)

    return result;
}


export const publishedCourse = async(id) => {
  const mutation = gql`
  mutation EnrollCourse {
    publishUserEnrollCourse(where: {id: "`+id+`"})  {
      id
    }
  }  
  `

  const result = await request(MASTER_URL, mutation)

  return result;
}