import React, { useContext, useState } from "react";
import { Line } from 'rc-progress';
import { AppContext } from "../../context/AppContext";

const MyEnrollment = () => {
  const { enrolledCourses, calculateCourseDuration, navigate } = useContext(AppContext);
  const [progressArray, setProgressData] = useState([  
    {lectureCompleted: 2, totalLectures: 4},
    {lectureCompleted: 1, totalLectures: 5},
    {lectureCompleted: 3, totalLectures: 6},            
    {lectureCompleted: 0, totalLectures: 0},        
    {lectureCompleted: 0, totalLectures: 5},
    {lectureCompleted: 4, totalLectures: 4},
    {lectureCompleted: 0, totalLectures: 0},  
    {lectureCompleted: 0, totalLectures: 0},
  ]);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Learning Journey</h1>
          <p className="mt-2 text-gray-600">Track your progress and continue learning</p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((course, index) => {
            const progress = progressArray[index] ? (progressArray[index].lectureCompleted * 100) / progressArray[index].totalLectures : 0;
            const isCompleted = progressArray[index] && progressArray[index].lectureCompleted / progressArray[index].totalLectures === 1;

            return (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.courseThumbnail} 
                    alt={course.courseTitle}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  {isCompleted && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Completed
                    </div>
                  )}
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {course.courseTitle}
                  </h3>

                  {/* Progress Section */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium text-gray-900">{Math.round(progress)}%</span>
                    </div>
                    <Line 
                      percent={progress} 
                      strokeWidth={4} 
                      strokeColor={isCompleted ? "#10B981" : "#3B82F6"}
                      trailColor="#E5E7EB"
                      className="rounded-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{progressArray[index]?.lectureCompleted || 0} lectures completed</span>
                      <span>of {progressArray[index]?.totalLectures || 0}</span>
                    </div>
                  </div>

                  {/* Course Duration */}
                  <div className="mt-4 flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {calculateCourseDuration(course)}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => navigate('/player/' + course._id)}
                    className={`mt-6 w-full py-2.5 px-4 rounded-lg font-medium transition-colors duration-200 ${
                      isCompleted 
                        ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {isCompleted ? 'Review Course' : 'Continue Learning'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {enrolledCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses enrolled yet</h3>
            <p className="text-gray-600 mb-6">Start your learning journey by enrolling in courses</p>
            <button
              onClick={() => navigate('/course-list')}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Browse Courses
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyEnrollment;
