import bibleStudy from "@/assets/bible-study.png";
import modernStudy from "@/assets/modern-study.png";

const FeaturesSection = () => {
  const features = [
    {
      number: "1",
      title: "100% Fiel à Bíblia:",
      description: "Os personagens de estudo são fiéis à palavra em seu contexto original, de entrega diversas traduções e interpretações da Bíblia, ajudando o estudante a compreender a Bíblia de forma simples e didática sempre utilizando a palavra como base.",
      image: bibleStudy
    },
    {
      number: "2",
      title: "Estudo Personalizado:",
      description: "Os personagens respondem de forma interativa e adaptada às suas dúvidas e ao seu nível de conhecimento, oferecendo uma experiência de aprendizado individualizada e facilitada e direcionada especialmente para iniciantes e dirreciona profundidade para os mais experientes.",
      image: modernStudy
    },
    {
      number: "3",
      title: "Dúvidas Resolvidas em Tempo Real:",
      description: "Você pode perguntar diretamente sobre uma passagem, conceito ou contexto, e receber explicações detalhadas sem precisar recorrer a especialistas ou comentaristas.",
      image: bibleStudy
    },
    {
      number: "4",
      title: "Acesso imediato a Informações:",
      description: "Oferece respostas rápidas a perguntas, eliminando a necessidade de procurar informações em diversas fontes não confiáveis ou de ler longos textos para encontrar respostas específicas.",
      image: modernStudy
    },
    {
      number: "5",
      title: "Acesso 24 hrs Por Dia:",
      description: "Está disponível a qualquer momento, permitindo que você estude a Bíblia de acordo com sua prioria agenda e sem limitações.",
      image: bibleStudy
    }
  ];

  return (
    <section className="bg-brown-medium py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cream mb-12">
          Por Que o AltaFé Funciona de forma tão eficaz?
        </h2>
        
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-center gap-8 bg-brown-dark/30 rounded-lg p-8"
            >
              <div className="w-full md:w-64 h-48 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gold mb-4">
                  {feature.number}) {feature.title}
                </h3>
                <p className="text-cream/90 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-cream rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-brown-dark mb-4">
            Sobre o que você quer aprender ou estudar hoje?
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
