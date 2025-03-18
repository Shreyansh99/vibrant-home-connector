
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollY = window.scrollY;
      const heroImage = heroRef.current.querySelector('.hero-image') as HTMLElement;
      const heroContent = heroRef.current.querySelector('.hero-content') as HTMLElement;
      
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
      
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12 md:gap-8">
        {/* Hero Content */}
        <motion.div 
          className="hero-content flex-1 text-center md:text-left space-y-6 pt-16 md:pt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-secondary rounded-full text-foreground/70"
          >
            Minimalist Design. Exceptional Experience.
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="block"
            >
              Beautiful
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="block text-primary"
            >
              Simple
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="block"
            >
              Design
            </motion.span>
          </h1>
          
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Experience the perfect harmony of form and function, inspired by the design principles of simplicity, elegance, and purpose.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <Button size="lg" className="rounded-full px-8 text-base h-12 shadow-lg shadow-primary/20">
              Explore Now
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 text-base h-12">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Hero Image */}
        <motion.div 
          className="hero-image flex-1 relative pt-8 md:pt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative z-0">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-70"></div>
            <div className="glass-panel rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Sleek Design"
                className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            className="absolute -bottom-6 -left-6 p-4 glass-panel rounded-xl shadow-lg max-w-[180px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
          >
            <p className="text-sm font-medium">100+ Happy Clients</p>
            <div className="flex -space-x-2 mt-2">
              <div className="w-8 h-8 rounded-full bg-primary"></div>
              <div className="w-8 h-8 rounded-full bg-accent"></div>
              <div className="w-8 h-8 rounded-full bg-secondary"></div>
              <div className="w-8 h-8 rounded-full bg-white text-xs flex items-center justify-center">+97</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute -top-6 -right-6 p-4 glass-panel rounded-xl shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.6 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <p className="text-sm font-medium">Award Winning Design</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-muted-foreground">Scroll Down</p>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-1"
              animate={{ 
                y: [0, 14, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
