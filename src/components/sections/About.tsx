import React from 'react';
import { motion } from 'framer-motion';

interface AboutProps {
  name: string;
  bio: string;
  image?: string;
}

const About: React.FC<AboutProps> = ({ name, bio, image }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-2">About Me</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div 
            className="w-full md:w-1/3 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src={image} 
              alt={name} 
              className="rounded-full w-full object-cover shadow-2xl"
            />
          </motion.div>
          
          <motion.div 
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Who am I?</h3>
            <div className="space-y-4 text-text">
              {bio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <motion.a 
              href="#contact"
              className="inline-block mt-8 bg-accent text-white font-medium py-3 px-8 rounded-md hover:bg-opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;