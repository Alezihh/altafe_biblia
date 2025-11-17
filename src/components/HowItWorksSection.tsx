import devicesCharacters from "@/assets/devices-characters.png";
import studentStudying from "@/assets/student-studying.png";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#8f6015] py-16 px-4">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-center text-2xl font-bold text-white md:text-3xl">
          Veja Na Prática Como Funciona, é muito simples!
        </h2>

        <div className="grid gap-8 md:grid-cols-2 md:gap-6">
          <div className="rounded-2xl bg-[#5c3910] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <h3 className="mb-4 text-lg font-bold md:text-xl">1) Escolha do Personagem:</h3>
            <div className="mb-4 flex justify-center">
              <img src={devicesCharacters} alt="Escolha de Personagens" className="w-[220px] md:w-[240px]" />
            </div>
            <p className="text-sm leading-relaxed md:text-base">
              Você seleciona um personagem bíblico como mentor do estudo, baseado em seus assuntos e textos de preferências ou necessidades
              espirituais do momento.
            </p>
          </div>

          <div className="rounded-2xl bg-[#5c3910] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <h3 className="mb-4 text-lg font-bold md:text-xl">2) Nível de Conhecimento:</h3>
            <div className="mb-6 flex flex-col gap-3">
              <div className="rounded-md bg-[#f1d4a5] px-6 py-3 text-center text-sm font-semibold text-[#5c3910] md:text-base">Iniciante</div>
              <div className="rounded-md bg-[#f5a623] px-6 py-3 text-center text-sm font-semibold text-white md:text-base">Intermediário</div>
              <div className="rounded-md bg-[#f1d4a5]/80 px-6 py-3 text-center text-sm font-semibold text-[#5c3910] md:text-base">Avançado</div>
            </div>
            <p className="text-sm leading-relaxed md:text-base">
              Em seguida, seleciona o seu nível de conhecimento (iniciante, intermediário ou avançado), para que o personagem se adapte e converse
              com você de forma personalizada e individualizada;
            </p>
          </div>

          <div className="rounded-2xl bg-[#5c3910] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <h3 className="mb-4 text-lg font-bold md:text-xl">3) Formato do Diálogo</h3>
            <div className="mb-6 flex flex-col gap-3">
              <div className="rounded-md bg-[#f5e9d4] px-6 py-3 text-center text-sm font-semibold text-[#5c3910] md:text-base">
                Conversa Aberta
              </div>
              <div className="rounded-md bg-[#c17c2a] px-6 py-3 text-center text-sm font-semibold text-white md:text-base">Estudo Guiado</div>
            </div>
            <p className="mb-4 text-sm leading-relaxed md:text-base">Por fim, defina o formato do diálogo, se vai ser:</p>
            <p className="mb-2 text-sm leading-relaxed md:text-base">
              <span className="font-bold">3.1)</span> Conversa aberta: Onde você inicia as perguntas sobre um tema do seu próprio interesse e o
              personagem tira suas dúvidas.
            </p>
            <p className="text-sm leading-relaxed md:text-base">
              <span className="font-bold">3.2)</span> Estudo guiado: Onde o personagem traz a ideia central do estudo e vai lhe guiando em toda
              explicação.
            </p>
          </div>

          <div className="rounded-2xl bg-[#5c3910] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <h3 className="mb-4 text-lg font-bold md:text-xl">4) Pronto! O estudo começa.</h3>
            <div className="mb-5 flex justify-center">
              <img src={studentStudying} alt="Estudante" className="w-[220px] rounded-xl md:w-[240px]" />
            </div>
            <p className="mb-3 text-sm leading-relaxed md:text-base">
              Em poucos segundos você já está interagindo de forma personalizada, estudando e compreendendo a palavra e fortalecendo sua conexão com
              Deus.
            </p>
            <p className="mb-3 text-sm leading-relaxed md:text-base">
              De qualquer lugar que você esteja, a qualquer hora do dia, sem limitações.
            </p>
            <p className="text-sm font-semibold leading-relaxed md:text-base">
              Você estará estudando e compreendendo a Bíblia direto da fonte!
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="cta"
            size="lg"
            onClick={() => scrollToSection("pricing")}
            className="rounded-full bg-[#1ea64a] px-12 py-4 text-lg font-semibold text-white shadow-[0_15px_40px_rgba(0,0,0,0.35)] hover:bg-[#18913f]"
          >
            Quero Acessar Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
