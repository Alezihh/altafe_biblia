import Logo from "./Logo";

const NewHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#4e2a05_0%,#8b530c_55%,#c67c13_100%)] py-24 px-4">
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center gap-12">
        <div className="mt-4">
          <Logo />
        </div>

        <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white md:text-6xl md:leading-[1.1]">
          Como{" "}
          <span className="underline decoration-white decoration-2 underline-offset-[6px]">
            estudar
          </span>{" "}
          a Bíblia para alcançar uma{" "}
          <span className="underline decoration-white decoration-2 underline-offset-[6px]">
            conexão
          </span>{" "}
          mais profunda com{" "}
          <span className="underline decoration-white decoration-2 underline-offset-[6px]">
            Deus
          </span>
        </h1>

        <div className="flex w-full justify-center">
          <div className="relative flex items-center justify-center">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(255,228,167,0.75)_0%,rgba(255,228,167,0)_70%)] blur-3xl -z-10" />
            <img
              src="/imagem hero - sem fundo.png"
              alt="Personagens Bíblicos"
              className="w-full max-w-[900px] drop-shadow-[0_0_140px_rgba(0,0,0,0.55)] relative z-0"
            />
          </div>
        </div>

        <p className="max-w-3xl text-base leading-relaxed text-white md:text-xl">
          Pela primeira vez na história, será possível{" "}
          <span className="underline decoration-white decoration-2 underline-offset-[6px]">
            conversar e aprender diretamente com Jesus
          </span>{" "}
          e outros heróis da Bíblia, ganhando conhecimento direto da fonte.
        </p>
      </div>
    </section>
  );
};

export default NewHeroSection;
