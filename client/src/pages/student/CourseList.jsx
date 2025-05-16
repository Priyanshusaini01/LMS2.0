import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../components/student/Footer'
import { assets } from '../../assets/assets'
import CourseCard from '../../components/student/CourseCard';
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import SearchBar from '../../components/student/SeacrhBar';

const CourseList = () => {
    const { input } = useParams()
    const { allCourses, navigate } = useContext(AppContext)
    const [filteredCourse, setFilteredCourse] = useState([])

    useEffect(() => {
        if (allCourses && allCourses.length > 0) {
            const tempCourses = allCourses.slice()
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
            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
                <div className="relative md:px-36 px-8 pt-20 text-left">
                    {/* Header Section */}
                    <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full mb-12'>
                        <div className="space-y-2">
                            <h1 className='text-4xl font-bold text-gray-800 tracking-tight'>
                                Discover Courses
                            </h1>
                            <p className='text-gray-500 flex items-center gap-2'>
                                <span 
                                    onClick={() => navigate('/')} 
                                    className='text-blue-600 cursor-pointer hover:text-blue-700 transition-colors duration-300'
                                >
                                    Home
                                </span>
                                <span className="text-gray-400">/</span>
                                <span className="text-gray-600">Course List</span>
                            </p>
                        </div>
                        <div className="w-full md:w-auto">
                            <SearchBar data={input} />
                        </div>
                    </div>

                    {/* Search Filter Badge */}
                    {input && (
                        <div className='inline-flex items-center gap-4 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mt-8 -mb-8 text-gray-600 animate-fadeIn'>
                            <p className="font-medium">{input}</p>
                            <img 
                                onClick={() => navigate('/course-list')} 
                                className='cursor-pointer hover:scale-110 transition-transform duration-300' 
                                src={assets.cross_icon} 
                                alt="Clear search" 
                            />
                        </div>
                    )}

                    {/* Course Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-6 px-2 md:p-0">
                        {filteredCourse.map((course, index) => (
                            <div 
                                key={index}
                                className="transform transition-all duration-500 hover:-translate-y-1"
                                style={{
                                    animationDelay: `${index * 100}ms`
                                }}
                            >
                                <CourseCard course={course} />
                            </div>
                        ))}
                    </div>

                    {/* No Results Message */}
                    {filteredCourse.length === 0 && (
                        <div className="text-center py-16">
                            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                                No courses found
                            </h3>
                            <p className="text-gray-500">
                                Try adjusting your search or browse our full course catalog
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CourseList