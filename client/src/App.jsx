import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollment from './pages/student/MyEnrollment'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentEnrolled from './pages/educator/StudentEnrolled'
import Navbar from './components/student/Navbar'
import CourseStructure from './components/educator/CourseStructure'
import "quill/dist/quill.snow.css"
// import Hero from './components/student/Hero'
const App=()=> 
      {  
        const isEducator = useMatch('/educator/*') // if true then show educator navbar else student navbar
        return (
    <div className='text-default min-h-screen bg-white'>
     
      { !isEducator && <Navbar/> } 
 
     <Routes>
      <Route path='/' element={<Home/>} />

      <Route path='/course-list' element={<CourseList/>} />
      <Route path='/course-list/:input' element={<CourseList/>} />
      <Route path='/course/:id' element ={<CourseDetails/>}/>
      <Route path='/my-enrollments' element ={<MyEnrollment/>}/>
      <Route  path='/player'  element= {<Player/>} />
      <Route  path='/player/:courseId'  element= {<Player/>} />
      <Route  path='/loading/:path'  element= {<Loading/>}/>
      <Route path='/course-structure' element={<CourseStructure />} />
      <Route  path='/educator'  element= {<Educator/>} >
            <Route index element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='add-course' element={<AddCourse />} />
            <Route path='my-courses' element={<MyCourses />} />
            <Route path='student-enrolled' element={<StudentEnrolled />} />
      </Route>
        {/* <Route path='/hero-h' element={<Hero/>}/>  */}

     </Routes>
    </div>
  )
}
export default App
