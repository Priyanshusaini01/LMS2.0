import React from 'react'
import Hero from '../../components/student/Hero';
import Companies from '../../components/student/Companies';
import CoursesSection from '../../components/student/CoursesSection';
// import { assets } from '../../assets/assets';
const Home = () => {
  return (
        <div className='flex flex-col items-center space-y-7 text-center'>
       <Hero/>
       <Companies />
       <CoursesSection />
        </div>
  )
}
console.log("Home component rendered");
export default Home
