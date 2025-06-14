import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Heart, Sparkles, Code, Database, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollY } = useScroll();
  const { toast } = useToast();

  const headerY = useTransform(scrollY, [0, 200], [0, -50]);
  const headerOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    toast({
      title: "Let's Connect! 💕",
      description: "Feel free to reach out at hirasajid.dev@gmail.com",
    });
  };

  const projects = [
    {
      title: "Hand Maestro",
      description: "Real-time gesture-controlled media player using hand tracking for intuitive playback control",
      tech: ["Python", "OpenCV", "MediaPipe"],
      category: "AI/ML",
      gradient: "from-pink-200 to-purple-200"
    },
    {
      title: "BlockedAI",
      description: "Chrome extension that blocks distracting websites using AI-based logic and smart scheduling",
      tech: ["JavaScript", "Chrome Extension APIs"],
      category: "Web Extension",
      gradient: "from-purple-200 to-pink-200"
    },
    {
      title: "AgriTech Lens",
      description: "AI-powered system for soil classification and crop health detection with farmer-friendly explanations",
      tech: ["Python", "TensorFlow", "OpenCV", "OpenAI API"],
      category: "AI/ML",
      gradient: "from-pink-100 to-purple-100"
    },
    {
      title: "Satiate",
      description: "Food donation platform for NGOs with inventory tracking and volunteer management",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      category: "Web App",
      gradient: "from-purple-100 to-pink-100"
    },
    {
      title: "MoodWave",
      description: "Voice emotion detection model using audio signal processing and machine learning",
      tech: ["Python", "Librosa", "scikit-learn", "TensorFlow"],
      category: "AI/ML",
      gradient: "from-pink-200 to-purple-200"
    },
    {
      title: "Pact AI",
      description: "Wellness chatbot app with emotionally intelligent AI companions and memory persistence",
      tech: ["Flutter", "Claude AI", "Firebase", "Provider"],
      category: "Mobile App",
      gradient: "from-purple-200 to-pink-200"
    }
  ];

  const skills = [
    { name: "Python", level: 90, icon: Code },
    { name: "JavaScript", level: 85, icon: Javascript },
    { name: "React", level: 80, icon: Code },
    { name: "Firebase", level: 85, icon: Database },
    { name: "TensorFlow", level: 75, icon: Code },
    { name: "Flutter", level: 70, icon: Code }
  ];

  return (
    <div className="min-h-screen bg-girly-gradient font-poppins">
      {/* Header */}
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
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 opacity-50"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
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
              A passionate <span className="text-purple-600 font-semibold">Full Stack Developer</span> from Pakistan 🇵🇰 
              who loves creating magical experiences with code and DIY projects!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-pink-100 text-pink-700 px-4 py-2 text-lg">
                <Heart className="w-4 h-4 mr-2" />
                Tech Enthusiast
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 px-4 py-2 text-lg">
                <Sparkles className="w-4 h-4 mr-2" />
                DIY Lover
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
                onClick={handleContactClick}
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-pink-500 w-8 h-8" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              About <span className="text-pink-600 font-dancing">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card-gradient border-0 shadow-xl">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Hey there! I'm a Computer Science student at NUST with a passion for creating 
                    innovative solutions that make a difference. I absolutely love the process of 
                    turning ideas into reality through code! ✨
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    When I'm not coding, you'll find me DIYing home decor, organizing events 
                    (I give off major HR energy! 😄), or exploring the latest tech trends. 
                    I believe in bringing creativity and enthusiasm to everything I do.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-pink-100 text-pink-700">📍 Islamabad, Pakistan</Badge>
                    <Badge className="bg-purple-100 text-purple-700">🎓 NUST Computer Science</Badge>
                    <Badge className="bg-pink-100 text-pink-700">💼 Full Stack Developer</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">🚀 What I Love</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Building AI/ML solutions that solve real problems</li>
                    <li>• Creating beautiful, user-friendly interfaces</li>
                    <li>• DIY projects and home decoration</li>
                    <li>• Organizing events and bringing people together</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">💡 My Approach</h3>
                  <p className="text-gray-600">
                    I believe in combining technical excellence with creativity and empathy. 
                    Every project is an opportunity to learn something new and make a positive impact!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              My <span className="text-pink-600 font-dancing">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are some of my favorite projects that showcase my passion for creating 
              innovative solutions! 💖
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`h-3 bg-gradient-to-r ${project.gradient}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="bg-pink-100 text-pink-700 text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-purple-200 text-purple-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              My <span className="text-pink-600 font-dancing">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card-gradient border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <skill.icon className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{skill.name}</h3>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full"
                      ></motion.div>
                    </div>
                    <p className="text-sm text-gray-600">{skill.level}% Proficiency</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Let's <span className="text-pink-600 font-dancing">Connect!</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always excited to collaborate on new projects or just chat about tech! 
              Feel free to reach out 💕
            </p>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-700">
                📧 <a href="mailto:hirasajid.dev@gmail.com" className="text-pink-600 hover:underline">
                  hirasajid.dev@gmail.com
                </a>
              </p>
              <p className="text-lg text-gray-700">
                💼 <a href="https://linkedin.com/in/hira-sajid-rs" className="text-pink-600 hover:underline">
                  linkedin.com/in/hira-sajid-rs
                </a>
              </p>
              <p className="text-lg text-gray-700">📱 +92-331-7904358</p>
            </div>
            
            <Button 
              onClick={handleContactClick}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 text-lg rounded-full"
            >
              Get In Touch! ✨
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg mb-2">
            Made with <Heart className="inline w-5 h-5 text-pink-500" /> by Hira Sajid
          </p>
          <p className="text-gray-400">© 2024 All rights reserved</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default Index;
