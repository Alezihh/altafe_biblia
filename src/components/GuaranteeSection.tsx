import garantiaBadge from "@/assets/garantia-badge.png";
import { Button } from "@/components/ui/button";

const GuaranteeSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-cream py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brown-dark mb-8 italic">
          "Será que é seguro adquirir o AltaFé?"
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
          <div className="w-64 h-64 flex-shrink-0">
            <img 
              src={garantiaBadge} 
              alt="Garantia 90 Dias" 
              className="w-full h-full object-contain animate-pulse"
            />
          </div>
          
          <div className="max-w-xl bg-white p-8 rounded-lg shadow-lg">
            <p className="text-brown-dark mb-4 leading-relaxed">
              Irmão e irmã, confiamos tanto que o AltaFé pode te ajudar a 
              compreender e se aprofundar na palavra que assumimos o compromisso 
              público de oferecer uma garantia de 90 dias.
            </p>
            
            <p className="text-brown-dark mb-4 leading-relaxed">
              Utilize por 90 dias (de forma ilimitada), estudando quantas vezes quiser...
            </p>
            
            <p className="text-brown-dark mb-4 leading-relaxed">
              Se você não gostar ou sentir que não conseguiu aprender nada, ainda 
              assim devolvemos o seu dinheiro.
            </p>
            
            <p className="text-brown-dark font-bold">
              O risco é zero. A garantia é real!
            </p>
          </div>
        </div>
        
        <div className="bg-white border-2 border-brown-dark border-dashed rounded-lg p-8 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-bold text-center text-brown-dark mb-6">
            Em resumo...
          </h3>
          
          <p className="text-brown-dark mb-4 leading-relaxed">
            O AltaFé é ambiente único que transforma seu estudo bíblico. Sendo 100% fiel à Palavra, 
            você aprenderá diretamente com personagens bíblicos como Jesus, Moisés e Paulo. Eles explicam, 
            ensinam e respondem suas dúvidas em linguagem clara e acessível.
          </p>
          
          <p className="text-brown-dark mb-4 leading-relaxed">
            Você será capaz de entender a bíblia de uma forma simples e didática e fortalecer ainda mais a sua conexão com Deus.
          </p>
          
          <p className="text-brown-dark mb-8 leading-relaxed font-semibold">
            Essa é a sua chance de iniciar 2025 diferente! Clique no Botão Abaixo Agora para iniciar sua jornada de crescimento espiritual!
          </p>
          
          <div className="flex justify-center">
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

export default GuaranteeSection;
