import { motion } from 'framer-motion';
import { ChevronDown, Heart, Sparkles, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTypingEffect } from '@/hooks/useTypingEffect';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  const typedText = useTypingEffect({
    words: [
      'AI/ML Enthusiast',
      'Problem Solver',
      'Data Science Student',
      'Python Developer',
      'Signal Processing Expert'
    ],
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 2000,
  });

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 z-10 px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-indigo-50/50"></div>
      <div className="container mx-auto text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 sm:space-y-6"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block"
          >
            <Sparkles className="text-pink-500 w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4" />
          </motion.div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-800 mb-2 sm:mb-4">
            Hi, I'm <span className="text-pink-600 font-dancing">Hira</span>
          </h1>
          
          <div className="h-12 sm:h-16 flex items-center justify-center">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-pink-600">
              {typedText}
              <span className="animate-pulse text-purple-500">|</span>
            </p>
          </div>
          
          <p className="text-base sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-6 max-w-3xl mx-auto px-4">
            From Pakistan 🇵🇰 with strong foundations in Python, machine learning, 
            and signal/audio processing. Passionate about solving impactful problems with data-driven solutions!
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4">
            <Badge variant="secondary" className="bg-pink-100 text-pink-700 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-lg">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              AI/ML Enthusiast
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-lg">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              NUST CS Student
            </Badge>
            <Badge variant="secondary" className="bg-pink-100 text-pink-700 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-lg">
              <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Problem Solver
            </Badge>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <Button 
              onClick={onContactClick}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg rounded-full w-full sm:w-auto"
            >
              Let's Connect! 💕
            </Button>
            <Button 
              variant="outline" 
              className="border-pink-300 text-pink-600 hover:bg-pink-50 px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg rounded-full w-full sm:w-auto"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown className="text-pink-500 w-6 h-6 sm:w-8 sm:h-8" />
      </motion.div>
    </section>
  );
};
