import NewHeroSection from "@/components/NewHeroSection";
import IntroSection from "@/components/IntroSection";
import UniqueEnvironmentSection from "@/components/UniqueEnvironmentSection";
import ProblemsSection from "@/components/ProblemsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WaveCharactersSection from "@/components/WaveCharactersSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyItWorksSection from "@/components/WhyItWorksSection";
import CharacterShowcase from "@/components/CharacterShowcase";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NewHeroSection />
      <IntroSection />
      <ProblemsSection />
      <UniqueEnvironmentSection />
      <TestimonialsSection />
      <WaveCharactersSection />
      <HowItWorksSection />
      <WhyItWorksSection />
      <CharacterShowcase />
      <BenefitsSection />
      <PricingSection />
      <GuaranteeSection />
      <Footer />
    </div>
  );
};

export default Index;
