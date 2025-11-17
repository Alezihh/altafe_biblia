import abrãoImg from "@/assets/abraao.png";
import jesusImg from "@/assets/jesus.png";
import joaoImg from "@/assets/joao.png";
import pauloImg from "@/assets/paulo.png";
import salomaoImg from "@/assets/salomao.png";
import { MessageCircle } from "lucide-react";

const suggestions = [
  {
    question: "Quero aprender sobre a Vida de Jesus e o Evangelho...",
    character: "Jesus Cristo",
    image: jesusImg,
    description:
      "Líder perfeito para explorar sua vida, ensinamentos, milagres, morte e ressurreição, fornecendo uma base sólida para compreender o Evangelho.",
  },
  {
    question: "Quero estudar sobre Fé e Obediência a Deus...",
    character: "Abraão",
    image: abrãoImg,
    description:
      "Foi conhecido como o pai da fé e oferece insights sobre como confiar e obedecer a Deus, mesmo em situações desafiadoras.",
  },
  {
    question: "Quero entender a Segunda Vinda de Cristo e o Apocalipse...",
    character: "João",
    image: joaoImg,
    description:
      "Autor do Apocalipse, é o guia ideal para explorar os principais temas e a visão profética sobre a segunda vinda de Cristo, ajudando os estudantes a compreenderem o significado simbólico e espiritual dessas passagens.",
  },
  {
    question: "Quero me aprofundar sobre Graça e Salvação...",
    character: "Paulo",
    image: pauloImg,
    description:
      "Com suas cartas às igrejas, Paulo explica profundamente os conceitos de graça e salvação, ajudando os estudantes a entenderem o plano redentor de Deus e a viverem em liberdade em Cristo.",
  },
  {
    question: "Quero aprender sobre Sabedoria e Vida Prática...",
    character: "Salomão",
    image: salomaoImg,
    description:
      "Como autor de Provérbios e Eclesiastes, Salomão orienta sobre sabedoria aplicada ao dia a dia, oferecendo ensinamentos práticos sobre escolhas, relacionamentos e prioridades.",
  },
];

const CharacterShowcase = () => {
  return (
    <section className="bg-[#8f6015] py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <div className="inline-flex rounded-md bg-[#f3eb9f] px-8 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#5b3a12]">
            Sobre o que você quer aprender ou estudar hoje?
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {suggestions.map((item) => (
            <div key={item.character} className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
              <div className="relative flex-shrink-0">
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-[#f5d58b] shadow-[0_25px_45px_rgba(0,0,0,0.35)] md:h-32 md:w-32">
                  <img src={item.image} alt={item.character} className="h-full w-full object-cover" />
                </div>
              </div>

              <div className="flex-1 rounded-xl bg-white/90 px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.3)]">
                <p className="mb-2 text-sm font-semibold italic text-[#59401b] md:text-base">"{item.question}"</p>
                <p className="text-sm font-semibold text-[#2f1a04] md:text-base">Sugestão: {item.character}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#4a3210] md:text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-sm italic text-white/90 md:text-base">
          Esses são apenas alguns exemplos de como escolher o personagem para o estudo; no ambiente{" "}
          <span className="font-bold underline">AltaFé</span> você terá centenas de personagens bíblicos diferentes à sua disposição para
          escolher. Aproveite e comece seu estudo hoje mesmo!
        </p>
      </div>
    </section>
  );
};

export default CharacterShowcase;
