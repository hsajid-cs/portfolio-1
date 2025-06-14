
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { volunteerWork } from '@/data/volunteerWork';

export const VolunteerSection = () => {
  return (
    <section id="volunteer" className="py-12 sm:py-20 bg-white/70 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Volunteer <span className="text-pink-600 font-dancing">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Giving back to the community is close to my heart! Here's how I contribute 💖
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Users className="text-pink-500 w-6 h-6 sm:w-8 sm:h-8 mb-2 flex-shrink-0" />
                    <Badge variant="secondary" className="bg-pink-100 text-pink-700 text-xs">
                      {work.period}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                    {work.role}
                  </CardTitle>
                  <CardDescription className="text-purple-600 font-medium text-sm sm:text-base">
                    {work.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{work.description}</p>
                  <Badge className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-0 text-xs sm:text-sm">
                    💫 {work.impact}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
