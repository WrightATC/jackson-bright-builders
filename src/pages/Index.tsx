import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionStatement from "@/components/MissionStatement";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionStatement />
      <ServicesSection />
      <AboutSection />
      <PortfolioPreview />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
