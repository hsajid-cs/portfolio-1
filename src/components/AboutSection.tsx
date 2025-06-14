
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-white/70 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-pink-600 font-dancing">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6 sm:mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card-gradient border-0 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  Hey there! I'm a Computer Science student at NUST with a passion for AI and Data Science. 
                  I absolutely love building real-time AI applications for emotion recognition, health monitoring, 
                  and agricultural intelligence! ✨
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  I'm a quick learner, team collaborator, and deeply interested in solving impactful problems 
                  with data-driven solutions. When I'm not coding, you'll find me volunteering for various 
                  causes and organizing events (I give off major organizer energy! 😄).
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-pink-100 text-pink-700 text-xs sm:text-sm">📍 Islamabad, Pakistan</Badge>
                  <Badge className="bg-purple-100 text-purple-700 text-xs sm:text-sm">🎓 NUST CS (CGPA: 3.73/4.00)</Badge>
                  <Badge className="bg-pink-100 text-pink-700 text-xs sm:text-sm">🎯 Expected Graduation: June 2026</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">🚀 What I Love</h3>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Building AI/ML solutions for real-world problems</li>
                  <li>• Signal and audio processing applications</li>
                  <li>• Health monitoring and agricultural intelligence</li>
                  <li>• Community service and event organization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">💡 My Approach</h3>
                <p className="text-sm sm:text-base text-gray-600">
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
  );
};
