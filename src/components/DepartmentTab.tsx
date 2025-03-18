
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const departments = [
  {
    id: 'design',
    name: 'Design',
    description: 'Our design team creates beautiful, functional interfaces that balance aesthetic appeal with usability. We focus on creating cohesive visual systems that communicate clearly and delight users.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    features: ['UI/UX Design', 'Brand Identity', 'Design Systems', 'Prototyping']
  },
  {
    id: 'development',
    name: 'Development',
    description: 'Our development team brings designs to life with clean, efficient code. We build responsive, accessible, and performant applications that work seamlessly across devices.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    features: ['Frontend', 'Backend', 'Mobile Apps', 'Performance Optimization']
  },
  {
    id: 'strategy',
    name: 'Strategy',
    description: 'Our strategy team helps you define the vision and roadmap for your product. We research user needs, market trends, and business goals to create a cohesive plan for success.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    features: ['Market Research', 'User Research', 'Product Strategy', 'Growth Planning']
  }
];

const DepartmentTab = () => {
  const [activeDept, setActiveDept] = useState(departments[0].id);
  
  // Get the active department
  const activeDepartment = departments.find(dept => dept.id === activeDept) || departments[0];
  
  return (
    <section id="departments" className="py-24 md:py-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-secondary rounded-full text-foreground/70">
            Our Expertise
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
            Specialized Departments
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each department brings specialized skills to create cohesive, beautiful products that serve real needs.
          </p>
        </div>
        
        {/* Department Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-secondary rounded-full">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDept(dept.id)}
                className={cn(
                  "relative px-6 py-2 text-sm font-medium transition-all duration-200 rounded-full",
                  activeDept === dept.id 
                    ? "text-white" 
                    : "text-foreground/60 hover:text-foreground"
                )}
              >
                {activeDept === dept.id && (
                  <motion.div
                    layoutId="dept-tab-indicator"
                    className="absolute inset-0 bg-primary rounded-full"
                    initial={false}
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{dept.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Department Content */}
        <div className="glass-panel rounded-2xl overflow-hidden">
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
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:bg-gradient-to-t lg:from-black/60 lg:to-transparent"></div>
                
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
                  className="text-lg text-muted-foreground mb-8"
                >
                  {activeDepartment.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h4 className="text-lg font-bold mb-4">Key Services</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {activeDepartment.features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
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
