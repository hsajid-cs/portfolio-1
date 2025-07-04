
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';

export const ProjectsSection = () => {
  const handleProjectClick = (title: string) => {
    // Dummy URL - you can replace this with actual project links later
    window.open(`https://example.com/project/${title.replace(/\s+/g, '-').toLowerCase()}`, '_blank');
  };

  return (
    <section id="projects" className="py-12 sm:py-20 bg-gradient-to-br from-pink-50/70 to-purple-50/70 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            My <span className="text-pink-600 font-dancing">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Here's a collection of my projects spanning AI/ML, web development, and mobile applications! 💖
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project.title)}
            >
              <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:ring-2 group-hover:ring-pink-300">
                <div className={`h-3 bg-gradient-to-r ${project.gradient}`}></div>
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors pr-2">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Badge variant="secondary" className="bg-pink-100 text-pink-700 text-xs">
                        {project.category}
                      </Badge>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-pink-500 transition-colors" />
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
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
  );
};
