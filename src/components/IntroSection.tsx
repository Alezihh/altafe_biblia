import bibleStudyGroup from "@/assets/bible-study-group.png";

const IntroSection = () => {
  return (
    <section className="bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
          "Irmãos e Irmãs, vou te mostrar como entender e se aprofundar no conhecimento bíblico hoje mesmo"
        </h2>
        
        <p className="text-center text-foreground mb-8">
          ...com essa nova forma de <span className="underline font-semibold">estudo da palavra</span>
        </p>
        
        <div className="flex justify-center mb-12">
          <img 
            src={bibleStudyGroup} 
            alt="Estudo em Grupo"
            className="w-full max-w-3xl rounded-lg shadow-xl"
          />
        </div>
        
        <div className="space-y-4 text-foreground leading-relaxed max-w-4xl mx-auto">
          <p className="font-semibold">
            Paz do Senhor! Se você está em busca adquirir conhecimento da bíblia em 2025...
          </p>
          
          <p>
            <span className="font-semibold">Compreender</span> o que o realmente os textos querem dizer...
          </p>
          
          <p>
            Se aprofundar no conhecimento da palavra...
          </p>
          
          <p>
            E criar uma conexão verdadeira com Deus...
          </p>
          
          <p className="underline font-semibold">
            Então, leia com atenção as informações dessa página.
          </p>
          
          <p className="font-semibold">
            Porque neste momento:
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
