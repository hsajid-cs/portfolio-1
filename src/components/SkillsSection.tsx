
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, GitBranch, Terminal, Palette, BarChart3, Brain, Cpu, Zap } from 'lucide-react';
import { skills } from '@/data/skills';

export const SkillsSection = () => {
  return (
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
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium text-pink-600 mb-4">Languages & Tools</h4>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline" className="border-pink-200 text-pink-700 px-3 py-2 text-sm flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-pink-200 text-pink-700 px-3 py-2 text-sm flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      JavaScript
                    </Badge>
                    <Badge variant="outline" className="border-pink-200 text-pink-700 px-3 py-2 text-sm flex items-center gap-2">
                      <Database className="w-4 h-4" />
                      SQL
                    </Badge>
                    <Badge variant="outline" className="border-pink-200 text-pink-700 px-3 py-2 text-sm flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      C/C++
                    </Badge>
                    <Badge variant="outline" className="border-pink-200 text-pink-700 px-3 py-2 text-sm flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Java
                    </Badge>
                    <Badge variant="outline" className="border-pink-200 text-pink-700 px-3 py-2 text-sm flex items-center gap-2">
                      <GitBranch className="w-4 h-4" />
                      Git
                    </Badge>
                    <Badge variant="outline" className="border-pink-200 text-pink-700 px-3 py-2 text-sm flex items-center gap-2">
                      <Terminal className="w-4 h-4" />
                      VS Code
                    </Badge>
                    <Badge variant="outline" className="border-pink-200 text-pink-700 px-3 py-2 text-sm flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Google Colab
                    </Badge>
                    <Badge variant="outline" className="border-pink-200 text-pink-700 px-3 py-2 text-sm flex items-center gap-2">
                      <Palette className="w-4 h-4" />
                      Figma
                    </Badge>
                    <Badge variant="outline" className="border-pink-200 text-pink-700 px-3 py-2 text-sm flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      Tableau
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-purple-600 mb-4">AI/ML Libraries</h4>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline" className="border-purple-200 text-purple-700 px-3 py-2 text-sm flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      Scikit-learn
                    </Badge>
                    <Badge variant="outline" className="border-purple-200 text-purple-700 px-3 py-2 text-sm flex items-center gap-2">
                      <Cpu className="w-4 h-4" />
                      TensorFlow
                    </Badge>
                    <Badge variant="outline" className="border-purple-200 text-purple-700 px-3 py-2 text-sm flex items-center gap-2">
                      <Database className="w-4 h-4" />
                      NumPy
                    </Badge>
                    <Badge variant="outline" className="border-purple-200 text-purple-700 px-3 py-2 text-sm flex items-center gap-2">
                      <Database className="w-4 h-4" />
                      Pandas
                    </Badge>
                    <Badge variant="outline" className="border-purple-200 text-purple-700 px-3 py-2 text-sm flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      OpenCV
                    </Badge>
                    <Badge variant="outline" className="border-purple-200 text-purple-700 px-3 py-2 text-sm flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Librosa
                    </Badge>
                    <Badge variant="outline" className="border-purple-200 text-purple-700 px-3 py-2 text-sm flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      MediaPipe
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
