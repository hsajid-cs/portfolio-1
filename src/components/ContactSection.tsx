
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ContactSectionProps {
  onContactClick: () => void;
}

export const ContactSection = ({ onContactClick }: ContactSectionProps) => {
  return (
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
            onClick={onContactClick}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 text-lg rounded-full"
          >
            Get In Touch! ✨
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
