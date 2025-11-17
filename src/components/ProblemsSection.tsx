import { X } from "lucide-react";
import manStudying from "@/assets/man-studying.png";
const ProblemsSection = () => {
  const problems = ["Tem dificuldade de compreender e interpretar os textos bíblicos...", "Possui uma rotina corrida e acaba ficando sem tempo para estudar a palavra...", "Fica perdido ao estudar a palavra por não entender quando aconteceu cada coisa...", "Se sente distante de Deus por não conseguir se conectar com a palavra diariamente...", "Já começou a estudar a bíblia, mas tem dificuldades em memorizar os capítulos e versículos que acabou de ler..."];
  return <section className="bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center md:text-2xl">
              Estudantes da Palavra estão utilizando uma nova técnica - super prática, simples e didática - para adquirir mais conhecimento bíblico
            </h2>
            
            

            <div className="flex justify-center">
              <img src={manStudying} alt="Estudante com Jesus" className="w-full max-w-md rounded-lg" />
            </div>
          </div>
          
          <div>
            <p className="font-bold text-foreground mb-6">E essa nova técnica de estudar a bíblia, pode ajudar você que:</p>
            
            <div className="space-y-4">
              {problems.map((problem, index) => <div key={index} className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground">{problem}</p>
                </div>)}
            </div>
            
            <p className="text-foreground mt-8 italic">
              É , eu sei, essas dificuldades não são só suas, mas também já foram as minhas a muito tempo atrás...
            </p>
            
            <p className="text-foreground font-bold mt-6 italic">
              Mas agora, temos uma solução que vai te ajudar com tudo isso!
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ProblemsSection;