import { createContext,useContext,useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";
import {useAuth,useUser} from "@clerk/clerk-react"
import { use } from "react";
// import {Coursecard  }

export const AppContext = createContext();

export const AppcontextProvider = (props)=>{
    const currency=import.meta.env.VITE_CURRENCY
     const backendUrl = import.meta.env.VITE_BACKEND_URL
    const navigate= useNavigate();

    const {getToken}=useAuth();
    const {user}=useUser(); 
     
// calculate rating of course
    const calculateRating = (course) => {

        if (course.courseRatings.length === 0) {
            return 0
        }

        let totalRating = 0
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating
        })
        return Math.floor(totalRating / course.courseRatings.length)
    }
    
    //fetch user enrolled courses
    const fetchUserEnrolledCourses = async () => {
        setEnrolledCourses(dummyCourses)
    }

    // Function to Calculate Course Chapter Time
       const calculateChapterTime = (chapter) => {
   
           let time = 0
   
           chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)
   
           return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] })
   
       }
   
       // Function to Calculate Course Duration
       const calculateCourseDuration = (course) => {
   
           let time = 0
   
           course.courseContent.map(
               (chapter) => chapter.chapterContent.map(
                   (lecture) => time += lecture.lectureDuration
               )
           )
   
           return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] })
   
       }

       // function to calculate number of lectures
         const calculateNoOfLectures = (course) => {
              let totalLectures = 0;
                  course.courseContent.forEach(chapter => {
                if (Array.isArray(chapter.chapterContent)) {
                     totalLectures += chapter.chapterContent.length;
                }
              });
              return totalLectures;
         }
    //get all course data from local storage
      const [allCourses, setAllCourses] = useState([])
      const [isEducator,setIsEducator] = useState(true)
      const [enrolledCourses, setEnrolledCourses] = useState([])    // for enrolled courses
             const [showLogin, setShowLogin] = useState(false)
             const [userData, setUserData] = useState(null)
         

      const fetchallcourses= async()=>{
         setAllCourses(dummyCourses)
      }
      // Call the fetch function when the component mounts
      useEffect(() => {
          fetchallcourses()
          fetchUserEnrolledCourses()
        }, [])
        
        const logToken=async()=>{
            console.log(await getToken())
        }
        // Log the token when the user changes
        useEffect(() => {
            if(user){   
            logToken()
            }
        }, [user])
        const value={ // we can able to access this value in any component
            // Add your context values here
            currency,allCourses,navigate,calculateRating,
            isEducator,setIsEducator,calculateChapterTime,
            calculateCourseDuration,calculateNoOfLectures,
            enrolledCourses,setEnrolledCourses, fetchUserEnrolledCourses
        }
    return (
        <AppContext.Provider value={value}>
         {props.children }
        </AppContext.Provider>
    )
}