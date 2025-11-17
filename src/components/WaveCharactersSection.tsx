import jesusImg from "@/assets/jesus.png";
import moisesImg from "@/assets/moises.png";
import noeImg from "@/assets/noe.png";

const cards = [
  { img: jesusImg, name: "JESUS CRISTO" },
  { img: moisesImg, name: "MOISÉS" },
  { img: noeImg, name: "NOÉ" },
];

const WaveCharactersSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#ad741d] py-24 px-4 text-white">
      <div className="absolute inset-0">
        <svg
          className="absolute left-0 right-0 top-0 -translate-y-8 h-72 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#f7ecd5"
            d="M0,64L48,74.7C96,85,192,107,288,128C384,149,480,171,576,186.7C672,203,768,213,864,197.3C960,181,1056,139,1152,106.7C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
        <svg
          className="absolute left-0 right-0 top-6 -translate-y-4 h-64 w-full opacity-85"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#d6a45c"
            d="M0,224L40,218.7C80,213,160,203,240,170.7C320,139,400,85,480,96C560,107,640,181,720,186.7C800,192,880,128,960,122.7C1040,117,1120,171,1200,176C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
        <svg
          className="absolute left-0 right-0 top-20 h-64 w-full opacity-65"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#8b5a16"
            d="M0,288L48,266.7C96,245,192,203,288,165.3C384,128,480,96,576,96C672,96,768,128,864,149.3C960,171,1056,181,1152,192C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center">
        <div className="mb-12">
          <span className="inline-flex rounded-md bg-[#f2f5c8] px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#604015]">
            Agora ficou fácil estudar e compreender a Bíblia!
          </span>
        </div>

        <div className="mb-16 grid w-full gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex flex-col rounded-[22px] bg-[#c99337] p-1 shadow-[0_25px_60px_rgba(71,42,6,0.45)]"
            >
              <div className="flex h-full flex-col items-center rounded-[18px] bg-[#ad741d]">
                <div className="w-full overflow-hidden rounded-t-[18px]">
                  <img src={card.img} alt={card.name} className="h-[360px] w-full object-cover" />
                </div>
                <div className="w-full rounded-b-[18px] bg-[#f3e0a8] py-4 text-center">
                  <h3 className="text-base font-semibold tracking-[0.4em] text-[#5a4117]">{card.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl space-y-5 text-center text-base leading-relaxed md:text-lg">
          <h3 className="text-2xl font-bold uppercase tracking-wide">
            O que é o <span className="underline decoration-[#f3e0a8] underline-offset-4">AltaFé</span>... E Por Que Ele Vai Te Ajudar
            Compreender a Bíblia e te Aproximar de Deus?
          </h3>

          <p>
            O <span className="font-semibold underline decoration-[#f3e0a8] underline-offset-4">AltaFé</span> é um ambiente online de
            conexão direta com Jesus, Moisés, Salomão, João, Paulo e diversos outros personagens bíblicos para quem deseja estudar e compreender a
            palavra de forma simples e didática.
          </p>

          <p className="italic underline decoration-[#f3e0a8] decoration-dotted underline-offset-4">
            Ou seja: Você irá conversar de forma aberta ou estudar de forma guiada, com a companhia dos personagens da bíblia mais sábios da
            história, baseado em suas preferências ou necessidades espirituais do momento.
          </p>

          <p>
            E você pode fazer isso sempre que quiser (a qualquer hora do dia), sem limitações. O ambiente é acessível de onde estiver, seja no
            celular, tablet ou computador.
          </p>

          <p>
            Mesmo que você seja um iniciante ou até mais avançado no conhecimento, os personagens respondem de forma interativa e adaptada às suas
            dúvidas e ao seu nível de conhecimento, oferecendo uma experiência de aprendizado individualizada e única.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaveCharactersSection;