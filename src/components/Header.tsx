
import { motion, useScroll, useTransform } from 'framer-motion';

export const Header = () => {
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 200], [0, -50]);
  const headerOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <motion.header 
      style={{ y: headerY, opacity: headerOpacity }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-pink-200"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-dancing font-bold text-pink-600"
          >
            Hira Sajid ✨
          </motion.h1>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">About</a>
            <a href="#projects" className="text-gray-700 hover:text-pink-600 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-pink-600 transition-colors">Skills</a>
            <a href="#certifications" className="text-gray-700 hover:text-pink-600 transition-colors">Certifications</a>
            <a href="#volunteer" className="text-gray-700 hover:text-pink-600 transition-colors">Volunteer Work</a>
            <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
