
import { useToast } from '@/hooks/use-toast';
import { FloatingElements } from '@/components/FloatingElements';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { VolunteerSection } from '@/components/VolunteerSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

const Index = () => {
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "Let's Connect! 💕",
      description: "Feel free to reach out at hirasajid.dev@gmail.com",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 font-poppins relative overflow-hidden">
      <FloatingElements />
      <Header />
      <HeroSection onContactClick={handleContactClick} />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <VolunteerSection />
      <ContactSection onContactClick={handleContactClick} />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
