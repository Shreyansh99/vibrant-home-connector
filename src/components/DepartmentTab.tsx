
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample departments - you can replace with your actual departments from constants
const departments = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    description: 'Treatment for heart conditions and cardiovascular diseases.',
    image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe',
    features: ['Heart Surgery', 'Bypass', 'Valve Replacement', 'Angioplasty']
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    description: 'Surgical and non-surgical treatments for musculoskeletal issues.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5',
    features: ['Joint Replacement', 'Spine Surgery', 'Sports Medicine', 'Trauma Care']
  },
  {
    id: 'neurology',
    name: 'Neurology',
    description: 'Specialized care for conditions affecting the nervous system.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc',
    features: ['Brain Surgery', 'Stroke Management', 'Epilepsy Treatment', 'Parkinsons Care']
  },
  {
    id: 'oncology',
    name: 'Oncology',
    description: 'Advanced cancer treatments and comprehensive care protocols.',
    image: 'https://images.unsplash.com/photo-1579684288361-5c1a2957cc28',
    features: ['Chemotherapy', 'Radiation Therapy', 'Immunotherapy', 'Surgical Oncology']
  },
  {
    id: 'dentistry',
    name: 'Dentistry',
    description: 'Comprehensive dental care from routine cleanings to complex surgeries.',
    image: 'https://images.unsplash.com/photo-1606811851779-4ed2c062341e',
    features: ['Dental Implants', 'Cosmetic Dentistry', 'Orthodontics', 'Oral Surgery']
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    description: 'Treatments for skin conditions and cosmetic procedures.',
    image: 'https://images.unsplash.com/photo-1612532275214-e4ca76d0e4d1',
    features: ['Skin Cancer Treatment', 'Cosmetic Procedures', 'Laser Therapy', 'Acne Treatment']
  }
];

const DepartmentTab = () => {
  const [activeDept, setActiveDept] = useState(departments[0].id);
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Get the active department
  const activeDepartment = departments.find(dept => dept.id === activeDept) || departments[0];
  
  const scroll = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };
  
  return (
    <section id="departments" className="py-24 md:py-32 bg-[#071e3f] text-white">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-white/10 rounded-full text-white/90">
            Our Departments
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 text-white">
            Specialized Medical Fields
          </h2>
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We offer treatments across a wide range of medical specialties, connecting you with world-class healthcare facilities.
          </p>
        </div>
        
        {/* Department Scrollable List */}
        <div className="relative mb-16">
          <div 
            ref={containerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-none scroll-smooth py-4 px-2"
          >
            {departments.map((dept) => (
              <motion.div
                key={dept.id}
                onClick={() => setActiveDept(dept.id)}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "flex flex-col items-center justify-center min-w-[150px] h-[150px] p-6 rounded-full cursor-pointer transition-all duration-300 border",
                  activeDept === dept.id 
                    ? "border-primary bg-primary/20" 
                    : "border-white/20 bg-white/5 hover:bg-white/10"
                )}
              >
                <div className="h-16 w-16 mb-3 rounded-full bg-white/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-center">{dept.name}</span>
              </motion.div>
            ))}
          </div>
          
          {scrollPosition > 0 && (
            <button
              onClick={() => scroll(-200)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          
          {containerRef.current && 
            scrollPosition < containerRef.current.scrollWidth - containerRef.current.clientWidth - 10 && (
            <button
              onClick={() => scroll(200)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>
        
        {/* Department Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDept}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0"
            >
              {/* Image Side */}
              <div className="relative h-full min-h-[300px] lg:min-h-[500px] overflow-hidden">
                <motion.img
                  src={activeDepartment.image}
                  alt={activeDepartment.name}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent lg:bg-gradient-to-t lg:from-black/80 lg:to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-8 lg:p-12 text-white z-10 lg:max-w-lg">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-3xl font-display font-bold mb-2"
                  >
                    {activeDepartment.name}
                  </motion.h3>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-wrap gap-2 mt-4 lg:hidden"
                  >
                    {activeDepartment.features.map((feature, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl font-display font-bold mb-4 lg:hidden"
                >
                  {activeDepartment.name}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-lg text-white/80 mb-8"
                >
                  {activeDepartment.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h4 className="text-lg font-bold mb-4">Key Treatments</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {activeDepartment.features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mt-8 lg:mt-12"
                >
                  <button className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 rounded-full">
                    Learn More
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DepartmentTab;
