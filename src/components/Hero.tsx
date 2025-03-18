
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1631217868264-e6296c4dc25b"
          alt="Medical background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12 md:gap-8">
        {/* Hero Content */}
        <motion.div 
          className="hero-content flex-1 text-center md:text-left space-y-6 pt-16 md:pt-20 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-primary/20 rounded-full text-white"
          >
            International Medical Tourism
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="block"
            >
              Your Health,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="block text-primary"
            >
              Our Priority
            </motion.span>
          </h1>
          
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Find the best medical treatments and destinations worldwide. We provide expert guidance for your healthcare journey.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <Link to="/consultation">
              <Button size="lg" className="rounded-full px-8 text-base h-12 shadow-lg shadow-primary/20">
                Book Consultation
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="rounded-full px-8 text-base h-12 text-white border-white hover:bg-white/20">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Hero Video */}
        <motion.div 
          className="hero-image flex-1 relative pt-8 md:pt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative z-0">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-white/20 rounded-3xl blur-xl opacity-70"></div>
            <div className="glass-panel rounded-3xl overflow-hidden">
              <video 
                src="https://player.vimeo.com/external/308040879.sd.mp4?s=2ec7fe28d23e4f7fc9b6bf262136c742fd386a54&profile_id=164&oauth2_token_id=57447761"
                controls
                autoPlay
                muted
                loop
                className="w-full h-auto object-cover rounded-2xl shadow-lg shadow-black/30"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            className="absolute -bottom-6 -left-6 p-4 glass-panel rounded-xl shadow-lg max-w-[180px] bg-white/10 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
          >
            <p className="text-sm font-medium text-white">100+ Happy Patients</p>
            <div className="flex -space-x-2 mt-2">
              <div className="w-8 h-8 rounded-full bg-primary"></div>
              <div className="w-8 h-8 rounded-full bg-accent"></div>
              <div className="w-8 h-8 rounded-full bg-secondary"></div>
              <div className="w-8 h-8 rounded-full bg-white text-xs flex items-center justify-center">+97</div>
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
          <p className="text-sm text-white">Scroll Down</p>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full mt-1"
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
