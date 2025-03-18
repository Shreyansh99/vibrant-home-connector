import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { departments } from '@/constants/departments';

const DepartmentTab = () => {
  const [activeDept, setActiveDept] = useState(departments[0].id);
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  // Get the active department
  const activeDepartment = departments.find(dept => dept.id === activeDept) || departments[0];
  
  const scroll = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };
  
  return (
    <section 
      id="departments" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#1E67A8] text-white"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-white/10 rounded-full text-white/90">
            Our Departments
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 text-white">
            Specialized Medical Fields
          </h2>
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We offer treatments across a wide range of medical specialties, connecting you with world-class healthcare facilities.
          </p>
        </motion.div>
        
        {/* Department Scrollable List */}
        <motion.div 
          className="relative mb-16"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } }
          }}
        >
          <div 
            ref={containerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-none scroll-smooth py-4 px-2"
          >
            {departments.map((dept, index) => (
              <motion.div
                key={dept.id}
                onClick={() => setActiveDept(dept.id)}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "flex flex-col items-center justify-center min-w-[150px] h-[150px] p-6 rounded-full cursor-pointer transition-all duration-300 border",
                  activeDept === dept.id 
                    ? "border-[#90CAF9] bg-[#64B5F6]/20" 
                    : "border-white/20 bg-white/5 hover:bg-white/10"
                )}
              >
                <div className="h-16 w-16 mb-3 rounded-full bg-white/10 flex items-center justify-center">
                  <img src={dept.icon} alt={dept.name} className="h-10 w-10" />
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
        </motion.div>
        
        {/* Department Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-black/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDept}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0"
            >
              {/* Content Side - First on mobile */}
              <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center">
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
                  className="mt-8 lg:mt-12"
                >
                  <button className="px-6 py-2 border border-[#90CAF9] text-[#90CAF9] hover:bg-[#90CAF9] hover:text-white transition-colors duration-300 rounded-full">
                    Learn More
                  </button>
                </motion.div>
              </div>
              
              {/* Image Side - Second on mobile */}
              <div className="order-1 lg:order-2 relative h-full min-h-[300px] overflow-hidden">
                <motion.div
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 bg-[#64B5F6]/30 flex items-center justify-center"
                >
                  <img 
                    src={activeDepartment.icon} 
                    alt={activeDepartment.name}
                    className="w-32 h-32 opacity-50 animate-float"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E67A8]/80 to-transparent"></div>
                
                <div className="absolute top-0 left-0 p-8 lg:p-12 text-white z-10">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-3xl font-display font-bold mb-2"
                  >
                    {activeDepartment.name}
                  </motion.h3>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DepartmentTab;
