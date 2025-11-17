import { Button } from "@/components/ui/button";

const CTASection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-red-accent py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Você está preparado?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Se agora não for o seu momento, tudo bem!
        </p>
        
        <div className="space-y-4 text-white/90 mb-8 max-w-2xl mx-auto">
          <p>
            Queremos pessoas comprometidas e que querem realmente aprender mais sobre a palavra de Deus e transformar suas vidas pra melhor.
          </p>
          <p>
            Se você não está disposto no momento e não pode se comprometer com você mesmo, passe sua vaga à frente para outro irmão ou irmã.
          </p>
          <p>
            Se você está pronto, Aprendiz agora e inicie a sua transformação espiritual!
          </p>
        </div>
        
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

export default CTASection;
