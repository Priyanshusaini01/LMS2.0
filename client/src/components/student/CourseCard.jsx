import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import confetti from 'canvas-confetti'

const CourseCard = ({ course }) => {
    const { currency, calculateRating } = useContext(AppContext)
    const cardRef = useRef(null)
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)

    const handleMouseMove = (e) => {
        const card = cardRef.current
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateXValue = ((y - centerY) / centerY) * 10
        const rotateYValue = ((x - centerX) / centerX) * 10
        setRotateX(-rotateXValue)
        setRotateY(rotateYValue)
    }

    const handleMouseLeave = () => {
        setRotateX(0)
        setRotateY(0)
    }

    const triggerConfetti = () => {
        const duration = 3 * 1000
        const animationEnd = Date.now() + duration
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min
        }

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now()

            if (timeLeft <= 0) {
                return clearInterval(interval)
            }

            const particleCount = 50 * (timeLeft / duration)
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            })
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            })
        }, 250)
    }

    return (
        <Link 
            ref={cardRef}
            onClick={() => {
                scrollTo(0, 0)
                triggerConfetti()
            }} 
            to={'/course/' + course._id} 
            className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-100 hover:-translate-y-1 relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: 'preserve-3d'
            }}
        >
            {/* Animated SVG Background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,0 L100,0 L100,100 L0,100 Z"
                        fill="url(#gradient)"
                        className="animate-pulse"
                    />
                </svg>
            </div>

            <div className="relative overflow-hidden">
                <img 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                    src={course.courseThumbnail} 
                    alt={course.courseTitle} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Animated overlay elements */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 animate-bounce">
                        <span className="px-3 py-1.5 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-lg">
                            Enroll Now
                        </span>
                    </div>
                </div>
            </div>
            
            <div className="p-5 space-y-3 relative">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 relative">
                    {course.courseTitle}
                </h3>
                
                <div className="flex items-center gap-2 relative">
                    <span className="px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                        YouTube
                    </span>
                </div>

                <div className="flex items-center gap-3 relative">
                    <div className="flex items-center gap-1">
                        <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                            {calculateRating(course)}
                        </span>
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <img
                                    key={i}
                                    className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-300"
                                    style={{ transitionDelay: `${i * 50}ms` }}
                                    src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank}
                                    alt=""
                                />
                            ))}
                        </div>
                    </div>
                    <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                        ({course.courseRatings.length} reviews)
                    </span>
                </div>

                <div className="flex items-center justify-between pt-2 relative">
                    <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}
                        </span>
                        {course.discount > 0 && (
                            <span className="text-sm text-gray-500 line-through group-hover:text-gray-400 transition-colors duration-300">
                                {currency}{course.coursePrice.toFixed(2)}
                            </span>
                        )}
                    </div>
                    {course.discount > 0 && (
                        <span className="px-2 py-1 text-xs font-semibold text-green-600 bg-green-50 rounded-full group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300">
                            {course.discount}% OFF
                        </span>
                    )}
                </div>

                {/* Animated progress bar */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-500 ease-out" />
            </div>
        </Link>
    )
}

export default CourseCard