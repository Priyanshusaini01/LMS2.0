import React, { useState } from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-20 px-8 md:px-36 bg-gradient-to-b from-white to-blue-50">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          What Our Learners Say
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Hear from our learners as they share their journeys of transformation, success, and how our platform has made a difference in their lives.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                "
              </div>
            </div>

            {/* Content */}
            <div className="p-8 pt-10">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    className="w-5 h-5 transform transition-transform duration-300 group-hover:scale-110"
                    style={{ transitionDelay: `${i * 50}ms` }}
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt="star"
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                {testimonial.feedback}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="relative">
                  <img 
                    className="h-14 w-14 rounded-full object-cover ring-4 ring-blue-50 group-hover:ring-blue-100 transition-all duration-300" 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-12">
        {dummyTestimonial.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
