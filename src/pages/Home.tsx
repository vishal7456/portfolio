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
  profession: 'Data Scientist & AI Engineer',
  email: 'preetvishal7456@gmail.com',
  bio: `Aspiring Data Scientist with a strong foundation in Machine Learning and Agentic AI. Proficient in Python and C++, with a focus on developing intelligent, data-driven solutions and automating complex workflows.
`,
};

const skills = [
  { name: 'Python', level: 90, icon: '/logo/python.png' },
  { name: 'Java', level: 80, icon: '/logo/java.png' },
  { name: 'C,C++', level: 85, icon: '/logo/C++.png' },
  { name: 'HTML/CSS', level: 90, icon: '/logo/HTML.png' },
  { name: 'Tailwind CSS', level: 85, icon: '/logo/css.png' },
  { name: 'React.js', level: 90, icon: '/logo/react.png' },
  { name: 'JavaScript', level: 85, icon: '/logo/js.png' },
  { name: 'TypeScript', level: 80, icon: '/logo/ts.png' },
  { name: 'Node.js', level: 65, icon: '/logo/node.png' },
  { name: 'MongoDB', level: 70, icon: '/logo/mongo.png' },
  { name: 'SQL', level: 85, icon: '/logo/sql.png' },
  { name: 'Excel', level: 65, icon: '/logo/excel.png' },
  { name: 'Power BI', level: 75, icon: '/logo/powerbi.png' },
  { name: 'Git', level: 65, icon: '/logo/git.png' },
  { name: 'PHP', level: 75, icon: '/logo/php.png' }, 
 
  // No icon available for Git in /public/logo/
  
];

const projects = [
  {
    id: '1',
    title: 'Campus Connect',
    description: ' Campus Connect is a comprehensive digital platform designed to enhance communication and resource sharing within educational institutions.',
    image: process.env.PUBLIC_URL + '/logo/cc.jpg',
    tags: ['react', 'node.js', 'mongodb'],
    demoUrl: 'https://campus-connect-psi.vercel.app/',
    githubUrl: 'https://github.com/vishal7456/major_campusconnect',
  },
  {
    id: '2',
    title: 'RAG based QnA System',
    description: 'An advanced RAG system utilizing hybrid search and high-speed LLM generation for complex question answering.',
    image: process.env.PUBLIC_URL + '/logo/rag.png',
    tags: ['python', 'Gen AI'],
    demoUrl: '',
    githubUrl: 'https://github.com/SabudhFoundation/passion-project-rag_question_answering'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A weather application that displays current and forecasted weather data with interactive visualizations.',
    image: process.env.PUBLIC_URL + '/logo/weather.png',
    tags: ['javascript', 'api', 'css'],
    demoUrl: 'https://weatherly-one-theta.vercel.app/',
    githubUrl: 'https://github.com/vishal7456/weatherly'
  },
  {
    id: '4',
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for tracking social media metrics across multiple platforms.',
    image: process.env.PUBLIC_URL + '/logo/dashboard.png',
    tags: ['react', 'chart.js', 'api'],
    demoUrl: 'https://example.com/social-media-dashboard-demo',
    githubUrl: 'https://github.com/VishalpreetSingh1/Social-Media-Dashboard'
  },
  {
    id: '5',
    title: 'Recipe Finder',
    description: 'A web application for discovering recipes based on available ingredients with filtering options.',
    image: process.env.PUBLIC_URL + '/logo/recepie.jpg',
    tags: ['javascript', 'api', 'css'],
    demoUrl: 'https://example.com/recipe-finder-demo',
    githubUrl: 'https://github.com/VishalpreetSingh1/Recipe-Finder'
  },
  {
    id: '6',
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with React and Tailwind CSS to showcase projects and skills.',
    image: process.env.PUBLIC_URL + '/logo/portfolio.png',
    tags: ['react', 'tailwind', 'framer-motion'],
    demoUrl: 'https://porfolio-frontend-sepia.vercel.app/',
    githubUrl: 'https://github.com/vishal7456/portfolio'
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
