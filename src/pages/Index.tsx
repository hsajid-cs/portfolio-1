import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Heart, Sparkles, Code, Database, ArrowUp, Award, Users, Github, Linkedin, Mail, Phone, MapPin, Brain, Cpu, Zap, Binary, CircuitBoard, Atom, Star, Hexagon, Triangle, Circle } from 'lucide-react';
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

  // Floating background elements
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

  const projects = [
    {
      title: "Pact AI",
      description: "Mobile app featuring personalized AI companions to boost productivity and emotional wellness. AI bots maintain memory, send check-ins, and interact contextually to build consistency.",
      tech: ["Flutter", "Claude API", "Firebase"],
      category: "Mobile App",
      gradient: "from-purple-200 to-pink-200"
    },
    {
      title: "Hand Maestro",
      description: "Gesture-controlled media player for real-time interaction using accurate hand tracking and dynamic control mechanisms",
      tech: ["Python", "OpenCV", "MediaPipe"],
      category: "AI/ML",
      gradient: "from-pink-200 to-purple-200"
    },
    {
      title: "AgriTech Lens",
      description: "AI-based solution to classify soil types and assess crop health. Integrated OpenAI API to deliver actionable farming insights and enhance agricultural productivity",
      tech: ["Python", "TensorFlow", "MediaPipe", "OpenCV", "OpenAI API"],
      category: "AI/ML",
      gradient: "from-pink-100 to-purple-100"
    },
    {
      title: "HeartbeatAI",
      description: "ML pipeline to predict heart rate from PPG signals. Preprocessed raw data, removed noise, and trained regression models for health monitoring",
      tech: ["Python", "Scikit-learn", "TensorFlow"],
      category: "AI/ML",
      gradient: "from-purple-100 to-pink-100"
    },
    {
      title: "MoodWave",
      description: "Voice emotion recognition system using the CREMA-D dataset. Extracted MFCC features and trained models for accurate mood detection",
      tech: ["Python", "Librosa", "Scikit-learn", "TensorFlow"],
      category: "AI/ML",
      gradient: "from-pink-200 to-purple-200"
    },
    {
      title: "BlockedAI",
      description: "Browser extension that uses AI to block distracting websites based on behavior patterns and user-defined triggers",
      tech: ["JavaScript", "Chrome Extension APIs"],
      category: "Web Extension",
      gradient: "from-purple-200 to-pink-200"
    }
  ];

  const skills = [
    { name: "Python", level: 95, icon: Code },
    { name: "JavaScript", level: 85, icon: Code },
    { name: "Machine Learning", level: 90, icon: Brain },
    { name: "TensorFlow", level: 85, icon: Database },
    { name: "OpenCV", level: 80, icon: Code },
    { name: "Flutter", level: 75, icon: Code }
  ];

  const certifications = [
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera",
      date: "Ongoing",
      description: "Advanced deep learning techniques and neural networks",
      badge: "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700"
    },
    {
      title: "Advanced Learning Algorithms",
      issuer: "Coursera",
      date: "Dec 2024",
      description: "Advanced machine learning algorithms and techniques",
      badge: "bg-gradient-to-r from-green-100 to-blue-100 text-green-700"
    },
    {
      title: "Supervised Machine Learning",
      issuer: "Coursera",
      date: "Jul 2024",
      description: "Comprehensive supervised learning methods and applications",
      badge: "bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700"
    }
  ];

  const volunteerWork = [
    {
      role: "Usher",
      organization: "SGA SEECS",
      period: "May 2024 & May 2025",
      description: "Helped with judges ushering for project evaluation and academic events",
      impact: "Smooth event coordination",
      gradient: "from-pink-100 to-purple-100"
    },
    {
      role: "Registration Volunteer",
      organization: "SGA SEECS",
      period: "Dec 2023 & Oct 2024",
      description: "Helped with ushering and registration of volunteers for alumni homecoming and convocation",
      impact: "Successful event management",
      gradient: "from-purple-100 to-pink-100"
    },
    {
      role: "Volunteer",
      organization: "Alkhidmat Foundation",
      period: "Nov 2024",
      description: "Helped with ushering for the foundation-laying ceremony of their girls school",
      impact: "Community education support",
      gradient: "from-pink-200 to-purple-200"
    },
    {
      role: "Decor Executive",
      organization: "Nust Cultural Fest",
      period: "Feb 2025",
      description: "Collaborated in event planning and decoration for the university's cultural festival",
      impact: "Enhanced campus culture",
      gradient: "from-purple-200 to-pink-200"
    },
    {
      role: "Decor Executive",
      organization: "NEC",
      period: "Apr 2024",
      description: "Collaborated in event planning for their Eco carnival for Earth day 2024",
      impact: "Environmental awareness",
      gradient: "from-pink-100 to-purple-100"
    },
    {
      role: "Decor Executive",
      organization: "NCSC",
      period: "Sep 2024 - May 2025",
      description: "Collaborated in event planning and execution for campus-wide donation drives and awareness programs",
      impact: "Community engagement",
      gradient: "from-purple-100 to-pink-100"
    },
    {
      role: "Volunteer",
      organization: "Shaukat Khanum Hospital",
      period: "Mar 2025",
      description: "Engaged in campaign planning and outreach for fundraising initiatives",
      impact: "Raised PKR 100,000+ in zakat donations",
      gradient: "from-pink-200 to-purple-200"
    },
    {
      role: "Iftar Drive Volunteer",
      organization: "Rizq",
      period: "Mar 2024",
      description: "Helped set up venue for multiple iftars in Ramadan 2024",
      impact: "Community service during Ramadan",
      gradient: "from-purple-200 to-pink-200"
    },
    {
      role: "Web Content Writer",
      organization: "Rizq",
      period: "Aug 2020 - Feb 2021",
      description: "Contributed to research and writing for food insecurity campaigns",
      impact: "Helped raise PKR 50,000 for ration drives",
      gradient: "from-pink-100 to-purple-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 font-poppins relative overflow-hidden">
      {/* Floating Background Elements */}
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
              <a href="#certifications" className="text-gray-700 hover:text-pink-600 transition-colors">Certifications</a>
              <a href="#volunteer" className="text-gray-700 hover:text-pink-600 transition-colors">Volunteer Work</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <ChevronDown className="text-pink-500 w-8 h-8" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/70 backdrop-blur-sm relative z-10">
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
                    Hey there! I'm a Computer Science student at NUST with a passion for AI and Data Science. 
                    I absolutely love building real-time AI applications for emotion recognition, health monitoring, 
                    and agricultural intelligence! ✨
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    I'm a quick learner, team collaborator, and deeply interested in solving impactful problems 
                    with data-driven solutions. When I'm not coding, you'll find me volunteering for various 
                    causes and organizing events (I give off major organizer energy! 😄).
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-pink-100 text-pink-700">📍 Islamabad, Pakistan</Badge>
                    <Badge className="bg-purple-100 text-purple-700">🎓 NUST CS (CGPA: 3.73/4.00)</Badge>
                    <Badge className="bg-pink-100 text-pink-700">🎯 Expected Graduation: June 2026</Badge>
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
                    <li>• Building AI/ML solutions for real-world problems</li>
                    <li>• Signal and audio processing applications</li>
                    <li>• Health monitoring and agricultural intelligence</li>
                    <li>• Community service and event organization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">💡 My Approach</h3>
                  <p className="text-gray-600">
                    I believe in combining technical excellence with analytical thinking and research. 
                    Every project is an opportunity to learn something new and make a positive impact 
                    through data-driven solutions!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-pink-50/70 to-purple-50/70 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              My <span className="text-pink-600 font-dancing">AI/ML Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are some of my favorite AI and machine learning projects that showcase my passion for 
              creating innovative, data-driven solutions! 💖
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
      <section id="skills" className="py-20 bg-white/70 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              My <span className="text-pink-600 font-dancing">Technical Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Core technical skills I've developed through projects and coursework
            </p>
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

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="bg-card-gradient border-0 shadow-lg max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Additional Technical Skills</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-pink-600 mb-3">Languages & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "JavaScript", "SQL", "C/C++", "Java", "Git", "VS Code", "Google Colab", "Figma", "Tableau"].map((skill) => (
                        <Badge key={skill} variant="outline" className="border-pink-200 text-pink-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-purple-600 mb-3">AI/ML Libraries</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Scikit-learn", "TensorFlow", "NumPy", "Pandas", "OpenCV", "Librosa", "MediaPipe"].map((skill) => (
                        <Badge key={skill} variant="outline" className="border-purple-200 text-purple-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gradient-to-br from-purple-50/70 to-pink-50/70 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              My <span className="text-pink-600 font-dancing">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Continuous learning is my passion! Here are my machine learning certifications 📚✨
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <Award className="text-pink-500 w-8 h-8 mb-2" />
                      <Badge className="text-xs">{cert.date}</Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="text-purple-600 font-medium">
                      {cert.issuer}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4">{cert.description}</p>
                    <Badge className={cert.badge}>
                      Certified ✨
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Work Section */}
      <section id="volunteer" className="py-20 bg-white/70 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Volunteer <span className="text-pink-600 font-dancing">Work</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Giving back to the community is close to my heart! Here's how I contribute 💖
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerWork.map((work, index) => (
              <motion.div
                key={`${work.role}-${work.organization}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-card-gradient border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`h-3 bg-gradient-to-r ${work.gradient}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <Users className="text-pink-500 w-8 h-8 mb-2" />
                      <Badge variant="secondary" className="bg-pink-100 text-pink-700 text-xs">
                        {work.period}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                      {work.role}
                    </CardTitle>
                    <CardDescription className="text-purple-600 font-medium text-base">
                      {work.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 leading-relaxed">{work.description}</p>
                    <Badge className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-0">
                      💫 {work.impact}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-pink-100/70 to-purple-100/70 backdrop-blur-sm relative z-10">
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
              I'm always excited to collaborate on AI/ML projects or just chat about tech! 
              Feel free to reach out 💕
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                  <a href="mailto:hirasajid.dev@gmail.com" className="text-pink-600 hover:underline text-sm">
                    hirasajid.dev@gmail.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                  <p className="text-gray-600 text-sm">+92-331-7963538</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Linkedin className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">LinkedIn</h3>
                  <a href="https://linkedin.com/in/hsajid-cs" className="text-pink-600 hover:underline text-sm">
                    hsajid-cs
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Github className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">GitHub</h3>
                  <a href="https://github.com/hsajid-cs" className="text-pink-600 hover:underline text-sm">
                    hsajid-cs
                  </a>
                </CardContent>
              </Card>
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
      <footer className="bg-gray-800/90 backdrop-blur-sm text-white py-8 relative z-10">
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
