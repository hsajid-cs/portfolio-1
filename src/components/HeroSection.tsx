
import { motion } from 'framer-motion';
import { ChevronDown, Heart, Sparkles, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-indigo-50/50"></div>
      <div className="container mx-auto px-6 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block"
          >
            <Sparkles className="text-pink-500 w-12 h-12 mx-auto mb-4" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-pink-600 font-dancing">Hira</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto">
            AI and Data Science enthusiast from Pakistan 🇵🇰 with strong foundations in Python, machine learning, 
            and signal/audio processing. Passionate about solving impactful problems with data-driven solutions!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-pink-100 text-pink-700 px-4 py-2 text-lg">
              <Heart className="w-4 h-4 mr-2" />
              AI/ML Enthusiast
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 px-4 py-2 text-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              NUST CS Student
            </Badge>
            <Badge variant="secondary" className="bg-pink-100 text-pink-700 px-4 py-2 text-lg">
              <Code className="w-4 h-4 mr-2" />
              Problem Solver
            </Badge>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-x-4"
          >
            <Button 
              onClick={onContactClick}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 text-lg rounded-full"
            >
              Let's Connect! 💕
            </Button>
            <Button 
              variant="outline" 
              className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 text-lg rounded-full"
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown className="text-pink-500 w-8 h-8" />
      </motion.div>
    </section>
  );
};
