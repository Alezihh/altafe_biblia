import bibleBook from "@/assets/bible-book.png";
import studyDesk from "@/assets/study-desk.png";
import bibleScrolls from "@/assets/bible-scrolls.png";
import modernStudyLaptop from "@/assets/modern-study-laptop.png";
import bible247 from "@/assets/bible-247.png";

const WhyItWorksSection = () => {
  const reasons = [
    {
      title: "1) 100% Fiel à Bíblia:",
      description:
        "Os personagens de estudo são fiéis à palavra em seu contexto original, ele integra diversas traduções e interpretações da Bíblia, ajudando o estudante a compreender a bíblia de forma simples e didática sempre utilizando a palavra como base.",
      image: bibleBook,
    },
    {
      title: "2) Estudo Personalizado:",
      description:
        "Os personagens respondem de forma interativa e adaptada às suas dúvidas e ao seu nível de conhecimento, oferecendo uma experiência de aprendizado individualizada e facilitando o estudo, evitando complexidades desnecessárias para iniciantes e oferecendo profundidade para os mais experientes.",
      image: studyDesk,
    },
    {
      title: "3) Dúvidas Resolvidas em Tempo Real:",
      description:
        "Você pode perguntar diretamente sobre uma passagem, conceito ou contexto, e receber explicações detalhadas sem precisar recorrer a especialistas ou comentaristas.",
      image: bibleScrolls,
    },
    {
      title: "4) Acesso imediato a Informações:",
      description:
        "Oferece respostas rápidas a perguntas, eliminando a necessidade de procurar informações em diversas fontes não confiáveis ou de ter longos textos para encontrar respostas específicas.",
      image: modernStudyLaptop,
    },
    {
      title: "5) Acesso 24 hrs Por Dia:",
      description:
        "Está disponível a qualquer momento, permitindo que você estude a Bíblia de acordo com sua própria agenda e sem limitações.",
      image: bible247,
    },
  ];

  return (
    <section className="bg-[#8f6015] py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-2xl font-bold text-white md:text-3xl">
          Por Que o AltaFé Funciona de forma tão eficaz?
        </h2>

        <div className="flex flex-col gap-10">
          {reasons.map((reason, index) => {
            const isEven = index % 2 === 1;
            return (
              <div key={reason.title} className="relative flex flex-col items-center gap-6 text-white md:flex-row md:gap-10">
                <div className={`flex-shrink-0 ${isEven ? "md:order-2" : ""}`}>
                  <div className="overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
                    <img src={reason.image} alt={reason.title} className="h-[130px] w-[160px] object-cover md:h-[160px] md:w-[200px]" />
                  </div>
                </div>
                <div className={`max-w-xl rounded-2xl bg-[#5c3910] px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] md:px-8 ${isEven ? "md:order-1" : ""}`}>
                  <div className="mb-3 inline-block rounded-full bg-[#c98e33] px-5 py-2 text-sm font-semibold text-[#2f1a04] md:text-base">
                    {reason.title}
                  </div>
                  <p className="text-sm leading-relaxed md:text-base">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyItWorksSection;
