
import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, Binary, CircuitBoard, Atom, Star, Hexagon, Triangle, Circle, Sparkles } from 'lucide-react';

const FloatingElement = ({ children, className, delay = 0, duration = 20 }) => (
  <motion.div
    className={`absolute opacity-20 ${className}`}
    animate={{
      y: [-20, -100, -20],
      x: [-10, 10, -10],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "linear"
    }}
  >
    {children}
  </motion.div>
);

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <FloatingElement className="top-10 left-10 text-pink-300" delay={0} duration={25}>
        <Brain size={40} />
      </FloatingElement>
      <FloatingElement className="top-32 right-20 text-purple-300" delay={2} duration={30}>
        <Cpu size={35} />
      </FloatingElement>
      <FloatingElement className="top-64 left-1/4 text-pink-200" delay={4} duration={28}>
        <CircuitBoard size={45} />
      </FloatingElement>
      <FloatingElement className="top-20 right-1/3 text-purple-200" delay={6} duration={22}>
        <Zap size={30} />
      </FloatingElement>
      <FloatingElement className="top-80 right-10 text-pink-300" delay={8} duration={26}>
        <Binary size={38} />
      </FloatingElement>
      <FloatingElement className="top-96 left-20 text-purple-300" delay={10} duration={24}>
        <Atom size={42} />
      </FloatingElement>
      
      {/* Geometric shapes */}
      <FloatingElement className="top-40 left-1/2 text-pink-200" delay={12} duration={20}>
        <Star size={25} />
      </FloatingElement>
      <FloatingElement className="top-72 right-1/4 text-purple-200" delay={14} duration={32}>
        <Hexagon size={35} />
      </FloatingElement>
      <FloatingElement className="top-16 left-2/3 text-pink-300" delay={16} duration={27}>
        <Triangle size={30} />
      </FloatingElement>
      <FloatingElement className="top-52 left-10 text-purple-300" delay={18} duration={29}>
        <Circle size={28} />
      </FloatingElement>
      
      {/* Sparkles scattered around */}
      <FloatingElement className="top-24 left-3/4 text-pink-200" delay={20} duration={18}>
        <Sparkles size={20} />
      </FloatingElement>
      <FloatingElement className="top-88 right-1/3 text-purple-200" delay={22} duration={31}>
        <Sparkles size={22} />
      </FloatingElement>
      <FloatingElement className="top-36 right-16 text-pink-300" delay={24} duration={23}>
        <Sparkles size={18} />
      </FloatingElement>
      <FloatingElement className="top-60 left-1/3 text-purple-300" delay={26} duration={25}>
        <Sparkles size={24} />
      </FloatingElement>
    </div>
  );
};
