import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';



// Sample data (in a real app, this would come from a CMS or API)
const userData = {
  name: 'Vishalpreet Singh',
  tagline: 'Turning ideas into elegant, functional digital experiences . Building Data-Driven Web Applications',
  profession: 'Full Stack Developer & Data Analyst ',
  email: 'preetvishal7456@gmail.com',
  bio: `I'm a passionate Full Stack Developer with expertise in building modern web applications using cutting-edge technologies.

With a strong foundation in both frontend and backend development, I create seamless user experiences that are not only visually appealing but also functionally robust. I'm dedicated to writing clean, maintainable code and constantly learning new technologies to stay at the forefront of web development.

When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community engagement. I focus on delivering clear, data-driven solutions that add real value. This portfolio showcases my projects, case studies, and analytical skills — each designed to demonstrate my ability to uncover insights and translate them into meaningful business outcomes.`,
};

const skills = [
  { name: 'Java', level: 90, icon: '/logo/java.png' },
  { name: 'C,C++', level: 85, icon: '/logo/C++.png' },
  { name: 'Python', level: 80, icon: '/logo/python.png' },
   { name: 'HTML/CSS', level: 90, icon: '/logo/HTML.png' },
  { name: 'Tailwind CSS', level: 85, icon: '/logo/css.png' },
  { name: 'React.js', level: 90, icon: '/logo/react.png' },
  { name: 'JavaScript', level: 85, icon: '/logo/js.png' },
  { name: 'TypeScript', level: 80, icon: '/logo/ts.png' },
  { name: 'Node.js', level: 65, icon: '/logo/node.png' },
  { name: 'MongoDB', level: 70, icon: '/logo/mongo.png' },
  { name: 'SQL', level: 55, icon: '/logo/sql.png' },
  { name: 'Excel', level: 65, icon: '/logo/excel.png' },
  { name: 'Power BI', level: 75, icon: '/logo/powerbi.png' },
  { name: 'Git', level: 75, icon: '/logo/git.png' }, // No icon available for Git in /public/logo/
  
];

const projects = [
  {
    id: '1',
    title: 'Campus Connect',
    description: ' Campus Connect is a comprehensive digital platform designed to enhance communication and resource sharing within educational institutions.',
    image: process.env.PUBLIC_URL + '/logo/e-cc.jpg',
    tags: ['react', 'node.js', 'mongodb'],
    link: 'https://campus-connect-psi.vercel.app/',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A productivity app for managing tasks with drag-and-drop functionality and team collaboration features.',
    image: process.env.PUBLIC_URL + '/logo/task.png',
    tags: ['react', 'firebase', 'tailwind'],

  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A weather application that displays current and forecasted weather data with interactive visualizations.',
    image: process.env.PUBLIC_URL + '/logo/weather.png',
    tags: ['javascript', 'api', 'css'],

  },
  {
    id: '4',
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for tracking social media metrics across multiple platforms.',
    image: process.env.PUBLIC_URL + '/logo/dashboard.png',
    tags: ['react', 'chart.js', 'api'],

  },
  {
    id: '5',
    title: 'Recipe Finder',
    description: 'A web application for discovering recipes based on available ingredients with filtering options.',
    image: process.env.PUBLIC_URL + '/logo/recepie.jpg',
    tags: ['javascript', 'api', 'css'],

  },
  {
    id: '6',
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with React and Tailwind CSS to showcase projects and skills.',
    image: process.env.PUBLIC_URL + '/logo/portfolio.png',
    tags: ['react', 'tailwind', 'framer-motion'],

  },
];

const Home: React.FC = () => {
  return (
    <Layout name={userData.name}>
      <Hero 
        name={userData.name} 
        tagline={userData.tagline} 
        profession={userData.profession} 
      />
      <About 
        name={userData.name} 
        bio={userData.bio} 
        image={process.env.PUBLIC_URL + '/user.JPG'} // Pass the image prop from public directory
      />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact email={userData.email} />
    </Layout>
  );
};

export default Home;
