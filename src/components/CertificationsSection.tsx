
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { certifications } from '@/data/certifications';

export const CertificationsSection = () => {
  const handleCertificateClick = (title: string) => {
    // Dummy URL - you can replace this with actual certificate links later
    window.open(`https://example.com/certificate/${title.replace(/\s+/g, '-').toLowerCase()}`, '_blank');
  };

  return (
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
              className="group cursor-pointer"
              onClick={() => handleCertificateClick(cert.title)}
            >
              <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:ring-2 group-hover:ring-pink-300">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Award className="text-pink-500 w-8 h-8 mb-2" />
                    <div className="flex items-center gap-2">
                      <Badge className="text-xs">{cert.date}</Badge>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-pink-500 transition-colors" />
                    </div>
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
  );
};
