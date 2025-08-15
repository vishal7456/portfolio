import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

interface HeroProps {
  name: string;
  tagline: string;
  profession: string;
}

const Hero: React.FC<HeroProps> = ({ name, tagline, profession }) => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 rounded-full bg-accent blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-accent blur-3xl -bottom-20 -right-20"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span className="text-accent">{name}</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {profession}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {tagline}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="bg-accent text-white font-medium py-3 px-8 rounded-md hover:bg-opacity-90 transition-all cursor-pointer"
              >
                Hire Me
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="bg-transparent text-white border border-white py-3 px-8 rounded-md hover:bg-white hover:bg-opacity-10 transition-all cursor-pointer"
              >
                Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <Link to="about" smooth={true} duration={500} offset={-70} className="text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;