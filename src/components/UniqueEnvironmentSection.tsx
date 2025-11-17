import Logo from "./Logo";
import { Check } from "lucide-react";
const UniqueEnvironmentSection = () => {
  return <section className="bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-12">
          
        </div>
        
        
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-center">
            <img src="/imagem meio .png" alt="Dispositivos mostrando personagens bíblicos" className="w-full max-w-2xl" />
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <Check className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
              <div>
                <p className="text-foreground leading-relaxed">
                  <span className="font-bold">Chega de ler e não entender:</span> Estude de forma Guiada e Personalizada. Receba explicações fiéis à Bíblia, sem palavras complicadas, para compreender até os versículos mais difíceis.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <Check className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
              <div>
                <p className="text-foreground leading-relaxed">
                  <span className="font-bold">Fortaleça Sua Conexão com Deus:</span> Você estará mais próximo da palavra, fortalecerá sua fé e viverá de acordo com os ensinamentos bíblicos. Sua jornada espiritual será mais profunda e verdadeira.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <Check className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
              <div>
                <p className="text-foreground leading-relaxed">
                  <span className="font-bold">Torne-se Um Estudante Melhor em Menos Tempo:</span> Não gaste horas buscando explicações em fontes não confiáveis ou estudando sem foco. Aqui, você aprende "direto da fonte", de forma mais rápida e aplica o conhecimento com facilidade na sua vida.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <Check className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
              <div>
                <p className="text-foreground leading-relaxed">
                  <span className="font-bold">Conhecimento Ilimitado:</span> Pergunte sobre qualquer assunto da Bíblia e receba uma resposta confiável de forma imediata, 100% fiel a palavra, seguindo o contexto teológico original.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <Check className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
              <div>
                <p className="text-foreground leading-relaxed">
                  <span className="font-bold">Sem desculpas sobre "Não Tenho Tempo":</span> Se Conecte com a Palavra e com Deus a Qualquer Hora e Lugar pelo seu celular, computador ou tablet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default UniqueEnvironmentSection;