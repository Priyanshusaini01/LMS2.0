import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
// import SearchBar from '../../components/student/SearchBar';
import SearchBar from '../../components/student/SeacrhBar'

const FloatingShape = ({ className }) => (
  <div className={`absolute rounded-2xl bg-gradient-to-br opacity-70 blur-sm animate-float ${className}`} />
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white min-h-[90vh] flex items-center">
      {/* Animated background shapes */}
      <FloatingShape className="from-blue-400 to-cyan-300 w-96 h-96 -top-20 -left-20 animate-delay-0" />
      <FloatingShape className="from-blue-500 to-indigo-400 w-[32rem] h-[32rem] top-40 -right-32 animate-delay-300" />
      <FloatingShape className="from-cyan-400 to-sky-300 w-80 h-80 bottom-0 left-40 animate-delay-700" />

      <div className="relative w-full mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Build the future 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                you dream of
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Join our community of learners and unlock your potential with world-class courses designed for tomorrow's innovators.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <SearchBar />
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Active Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50k+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Instructors</div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative lg:scale-110">
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={assets.sketch} 
                  alt="Learning Illustration" 
                  className="w-full h-auto"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse delay-300" />
              
              {/* Feature Cards */}
              <div className="absolute top-5 -right-8 bg-white p-4 rounded-xl shadow-lg transform rotate-6 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Live Sessions</span>
                </div>
              </div>

              <div className="absolute bottom-5 -left-8 bg-white p-4 rounded-xl shadow-lg transform -rotate-6 animate-float delay-150">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Project Based</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
// console.log("Hero component rendered"); // Debugging line to check if the component is rendering

// Add these animations to your global CSS or Tailwind config
const styles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-delay-0 {
    animation-delay: 0s;
  }

  .animate-delay-150 {
    animation-delay: 150ms;
  }

  .animate-delay-300 {
    animation-delay: 300ms;
  }

  .animate-delay-700 {
    animation-delay: 700ms;
  }
`;