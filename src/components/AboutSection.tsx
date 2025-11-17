import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-brown-dark py-16 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cream mb-12">
          Quem Somos
        </h2>
        
        <div className="bg-card rounded-lg p-8 md:p-12 shadow-2xl max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <Logo />
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Equipe AltaFé
          </h3>
          
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              O AltaFé nasceu da coração de estudiosos apaixonados pela Palavra de Deus. 
              Somos pessoas como você: buscadores da verdade, leitores ávidos da Bíblia, fascinados 
              pelas histórias que moldaram a fé de gerações. Durante nossa jornada, enfrentamos os 
              mesmos desafios que muitos enfrentam: textos difíceis de entender, falta de tempo e a 
              busca por significado mais profundo.
            </p>
            
            <p>
              Foi a partir dessas dificuldades que sentimos o chamado para criar algo transformador. 
              Reunimos, fé e o desejo de facilitar o estudo da Bíblia, dando vida ao AltaFé: 
              uma ferramenta que conecta você aos personagens mais inspiradores das Escrituras, 
              permitindo que cada passagem seja compreendida de maneira prática e impactante.
            </p>
            
            <p>
              Somos um time guiado por uma única missão: ajudar você a crescer em conhecimento e 
              em sua conexão com Deus, tornando a jornada de estudo da Bíblia mais acessível, clara 
              e enriquecedora. Aqui, o aprendizado é simples, a sabedoria é profunda, e a inspiração 
              é constante.
            </p>
            
            <p className="italic text-muted-foreground text-center mt-6">
              "Obrigados(as) pela confiança! Que a sua jornada de estudos seja inspiradora e verdadeira. 
              Ótimos Estudos! Equipe AltaFé."
            </p>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => scrollToSection('pricing')}
            >
              Quero Acessar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
