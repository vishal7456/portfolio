import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-2">My Skills</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out ${skill.name === 'Java' ? 'shadow-red-500/50' : skill.name === 'C,C++' ? 'shadow-blue-500/50' : skill.name === 'Python' ? 'shadow-yellow-500/50' : skill.name === 'HTML/CSS' ? 'shadow-orange-500/50' : skill.name === 'Tailwind CSS' ? 'shadow-teal-500/50' : skill.name === 'React.js' ? 'shadow-blue-400/50' : skill.name === 'JavaScript' ? 'shadow-yellow-300/50' : skill.name === 'TypeScript' ? 'shadow-blue-600/50' : skill.name === 'Node.js' ? 'shadow-green-500/50' : skill.name === 'MongoDB' ? 'shadow-green-700/50' : skill.name === 'SQL' ? 'shadow-indigo-500/50' : skill.name === 'Git' ? 'shadow-red-600/50' : ''}`}
              initial={{ opacity: 0, y: 20, boxShadow: "none" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: [
                  "0 15px 20px -3px rgba(20, 27, 25, 0.5)",
                  "-10px 0 20px -3px rgba(174, 215, 70, 0.5)",
                  "0 -15px 20px -3px rgba(100, 48, 221, 0.79)",
                  "10px 0 20px -3px rgba(7, 22, 16, 0.5)",
                  "0 15px 20px -3px rgba(141, 137, 136, 0.87)"
                ],
                transition: { duration: 0.1, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }
              }}
            >
              <div className="flex items-center mb-4">
                {skill.icon ? (
                  <img src={skill.icon} alt={skill.name} className={`w-8 h-8 mr-3 ${skill.name === 'JavaScript' || skill.name === 'TypeScript' ? '' : 'rounded-full'}`} />
                ) : (
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">{skill.name.charAt(0)}</span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-primary">{skill.name}</h3>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div 
                    className={`h-2.5 rounded-full ${skill.name === 'Java' ? 'bg-red-500' : skill.name === 'C,C++' ? 'bg-blue-500' : skill.name === 'Python' ? 'bg-yellow-500' : skill.name === 'HTML/CSS' ? 'bg-orange-500' : skill.name === 'Tailwind CSS' ? 'bg-teal-500' : skill.name === 'React.js' ? 'bg-blue-400' : skill.name === 'JavaScript' ? 'bg-yellow-300' : skill.name === 'TypeScript' ? 'bg-blue-600' : skill.name === 'Node.js' ? 'bg-green-500' : skill.name === 'MongoDB' ? 'bg-green-700' : skill.name === 'SQL' ? 'bg-indigo-500' : skill.name === 'Excel' ? 'bg-green-500' : skill.name === 'Power BI' ? 'bg-yellow-500' : skill.name === 'Git' ? 'bg-red-600' : 'bg-accent'}`}
                    style={{ width: `${skill.level}%` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  ></motion.div>
              </div>
              <div className="flex justify-end mt-1">
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;