import React, { useState } from 'react';

const CourseStructure = () => {
  const [activeTab, setActiveTab] = useState('structure');

  const courseStructure = [
    {
      level: 'Beginner',
      duration: '4 weeks',
      topics: ['Introduction to Fundamentals', 'Basic Concepts', 'Hands-on Projects', 'Assessment'],
      features: ['24/7 Support', 'Practice Exercises', 'Live Sessions', 'Course Materials']
    },
    {
      level: 'Intermediate',
      duration: '6 weeks',
      topics: ['Advanced Concepts', 'Real-world Projects', 'Team Collaboration', 'Industry Standards'],
      features: ['1-on-1 Mentoring', 'Code Reviews', 'Project Feedback', 'Career Guidance']
    },
    {
      level: 'Advanced',
      duration: '8 weeks',
      topics: ['Expert-level Topics', 'Complex Projects', 'System Design', 'Best Practices'],
      features: ['Industry Expert Sessions', 'Certification', 'Job Placement', 'Portfolio Development']
    }
  ];

  const feesStructure = [
    {
      plan: 'Basic',
      price: '$299',
      duration: '4 weeks',
      features: [
        'Access to Basic Courses',
        'Community Support',
        'Basic Course Materials',
        'Weekly Assessments'
      ]
    },
    {
      plan: 'Premium',
      price: '$499',
      duration: '6 weeks',
      features: [
        'Access to All Courses',
        '1-on-1 Mentoring',
        'Premium Course Materials',
        'Career Guidance',
        'Certificate of Completion'
      ]
    },
    {
      plan: 'Professional',
      price: '$799',
      duration: '8 weeks',
      features: [
        'Everything in Premium',
        'Industry Expert Sessions',
        'Job Placement Assistance',
        'Lifetime Access',
        'Priority Support'
      ]
    }
  ];

  return (
    <div className="pt-16">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Course Details</h1>
            <p className="text-lg text-gray-600">Comprehensive learning paths for every skill level</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg p-1 bg-white shadow-md">
              <button
                onClick={() => setActiveTab('structure')}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'structure'
                    ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Course Structure
              </button>
              <button
                onClick={() => setActiveTab('fees')}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'fees'
                    ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Fees Details
              </button>
            </div>
          </div>

          {/* Course Structure Content */}
          {activeTab === 'structure' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseStructure.map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">{course.level}</h3>
                    <p className="text-sky-500 font-medium">{course.duration}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Topics Covered</h4>
                    <ul className="space-y-2">
                      {course.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Features</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 mr-2 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Fees Structure Content */}
          {activeTab === 'fees' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {feesStructure.map((plan, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden"
                >
                  {index === 1 && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6 text-center">
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">{plan.plan}</h3>
                    <div className="flex justify-center items-baseline mb-2">
                      <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-1">/{plan.duration}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-8 w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-md">
                    Enroll Now
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseStructure; 