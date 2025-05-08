import { createContext,useContext,useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useEffect  } from "react";
import { useNavigate } from "react-router-dom";
// import {Coursecard  }

export const AppContext = createContext();

export const AppcontextProvider = (props)=>{
    const currency=import.meta.env.VITE_CURRENCY

    const navigate= useNavigate();

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

    //get all course data from local storage
      const [allCourses, setAllCourses] = useState([])
      const [isEducator,setIsEducator] = useState(true)

      const fetchallcourses= async()=>{
         setAllCourses(dummyCourses)
      }
      // Call the fetch function when the component mounts
      useEffect(() => {
          fetchallcourses()
        }, [])

        const value={
            // Add your context values here
            currency,allCourses,navigate,calculateRating,isEducator,setIsEducator
        }
    return (
        <AppContext.Provider value={value}>
         {props.children }
        </AppContext.Provider>
    )
}