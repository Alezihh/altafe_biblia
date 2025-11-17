import { Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Garantia 90 Dias",
      description: "Zero Risco. Assumimos um compromisso público com você: utilize por 90 dias, se você não gostar, ainda assim devolvemos o seu dinheiro."
    },
    {
      title: "Acesso Imediato",
      description: "Assim que o pagamento for aprovado, em menos de 2 minutos, você recebe o seu acesso por e-mail. Simples assim!"
    },
    {
      title: "Sem Limitações",
      description: "Sem limite de estudos e interações. Utilize todos os personagens, a qualquer hora do dia, sempre que quiser."
    },
    {
      title: "Celular, Computador e Tablet",
      description: "Acesse de qualquer aparelho - com apenas dois cliques - você já estará conectado com a palavra de Deus."
    }
  ];

  return (
    <section className="bg-[#8f6015] py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-3 text-center text-2xl font-bold text-white md:text-3xl">
          Nosso Compromisso
        </h2>
        <p className="mb-12 text-center text-base font-semibold uppercase tracking-[0.2em] text-[#fde7b0] md:text-lg">
          com você, estudante da Bíblia!
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/95 px-6 py-8 text-center text-[#5a3a13] shadow-[0_25px_60px_rgba(0,0,0,0.3)]"
            >
              <div className="mb-4 flex justify-center gap-1 text-[#f4b93a]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <h3 className="mb-3 text-lg font-semibold uppercase tracking-wide">
                {benefit.title}
              </h3>

              <p className="text-sm leading-relaxed md:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
