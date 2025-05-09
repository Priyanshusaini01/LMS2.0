import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../components/student/Footer'
import { assets } from '../../assets/assets'
import CourseCard from '../../components/student/CourseCard';
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import SearchBar from '../../components/student/SeacrhBar';

const  CourseList=()=> {
  const { input } = useParams()// it use to get URL parameters from the current URL.

  const { allCourses, navigate } = useContext(AppContext) // it use to get the context values from the AppContext.
  // it use to get the allCourses and navigate from the AppContext.

  const [filteredCourse, setFilteredCourse] = useState([]) // it use to set the filteredCourse state to an empty array.
  // it use to filter the courses based on the input value.

  useEffect(() => {
//
      if (allCourses && allCourses.length > 0) {

          const tempCourses = allCourses.slice() // it use to create a shallow copy of the allCourses array. to make a copy of the allCourses array.
          // it use to prevent mutating the original array.

          input
              ? setFilteredCourse(
                  tempCourses.filter(
                      item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
                  )
              )
              : setFilteredCourse(tempCourses)

      }

  }, [allCourses, input])
  return (
    <>
            <div className="relative md:px-36 px-8 pt-20 text-left">
                <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
                    <div>
                        <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
                        <p className='text-gray-500'><span onClick={() => navigate('/')} className='text-blue-600 cursor-pointer'>Home</span> / <span>Course List</span></p>
                    </div>
                    <SearchBar data={input} />
                </div>
                {input && <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600'>    
                    <p>{input}</p>  { /*when have input then show this div */}
                    <img onClick={() => navigate('/course-list')} className='cursor-pointer' src={assets.cross_icon} alt="" />
                </div>}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0">
                    {filteredCourse.map((course, index) => <CourseCard key={index} course={course} />)}
                </div>
            </div>
            <Footer />
        </>
  )
}

export default CourseList 