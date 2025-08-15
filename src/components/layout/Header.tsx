import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';


import { useState, useEffect } from 'react';




interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {




  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary py-2 shadow-md' : 'bg-transparent py-4'}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {scrolled ? (
            <>
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mr-2">
                <span className="text-white font-bold">{name.charAt(0)}</span>
              </div>
              <span className="text-white font-medium">{name}</span>
            </>
          ) : (
            <span className="text-xl font-bold text-white">Portfolio</span>
          )}
        </motion.div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <motion.li 
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-accent transition-colors cursor-pointer"
            >
              <Link to="home" smooth={true} duration={500} offset={-70}>Home</Link>
            </motion.li>
            <motion.li 
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-accent transition-colors cursor-pointer"
            >
              <Link to="about" smooth={true} duration={500} offset={-70}>About</Link>
            </motion.li>
            <motion.li 
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-accent transition-colors cursor-pointer"
            >
              <Link to="skills" smooth={true} duration={500} offset={-70}>Skills</Link>
            </motion.li>
            <motion.li 
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-accent transition-colors cursor-pointer"
            >
              <Link to="projects" smooth={true} duration={500} offset={-70}>Projects</Link>
            </motion.li>
            <motion.li 
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-accent transition-colors cursor-pointer"
            >
              <Link to="contact" smooth={true} duration={500} offset={-70}>Contact</Link>
            </motion.li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-primary w-full absolute top-full left-0 ${isOpen ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="text-white hover:text-accent transition-colors cursor-pointer mb-2"
          >
            <Link to="home" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>Home</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="text-white hover:text-accent transition-colors cursor-pointer mb-2"
          >
            <Link to="about" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>About</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="text-white hover:text-accent transition-colors cursor-pointer mb-2"
          >
            <Link to="skills" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>Skills</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="text-white hover:text-accent transition-colors cursor-pointer mb-2"
          >
            <Link to="projects" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>Projects</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="text-white hover:text-accent transition-colors cursor-pointer mb-2"
          >
            <Link to="contact" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>Contact</Link>
          </motion.li>
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Header;