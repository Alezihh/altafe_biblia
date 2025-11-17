import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-brown-dark py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Button 
          variant="cta" 
          size="lg"
          onClick={() => scrollToSection('pricing')}
          className="px-12 py-6 text-lg"
        >
          Quero Acessar Agora
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
