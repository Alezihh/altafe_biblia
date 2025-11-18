import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const featuresSimples = [
    "30 Devocionais",
    "Passo a passo de como aprender a bíblia em 30 dias"
  ];

  const featuresCompleto = [
    "Personagens - Os Ícones da Bíblia: Jesus, Abraão, Noé, Adão e outros;",
    "Personagens Os Escritores do Antigo Testamento;",
    "Personagens - Os Escritores do Novo Testamento;",
    "Personagens - Os 12 Apóstolos;",
    "Personagens - Os Profetas;",
    "Personagens - As Mulheres da Bíblia;"
  ];

  return (
    <section className="bg-gradient-to-b from-[#4e2a05] via-[#8b530c] to-[#c67c13] py-20 px-4" id="pricing">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Combo Simples - Lado Esquerdo */}
          <div className="rounded-[32px] bg-white shadow-[0_35px_80px_rgba(0,0,0,0.35)] overflow-hidden">
            {/* Banner marrom escuro no topo */}
            <div className="bg-[#463015] px-6 py-4 text-center">
              <h2 className="text-lg font-bold uppercase text-white tracking-wide">
                COMBO SIMPLES
              </h2>
            </div>

            <div className="px-6 py-10 md:px-12 md:py-12">
              {/* Imagem hero horizontal */}
              <div className="mb-8 flex justify-center">
                <img 
                  src="/imagem hero - sem fundo.png" 
                  alt="Personagens AltaFé" 
                  className="w-full max-w-full rounded-2xl" 
                />
              </div>

              {/* Preços */}
              <div className="mb-8 text-center">
                <p className="mb-2 text-2xl md:text-3xl font-semibold line-through text-red-600">DE R$97,90</p>
                <p className="mb-2 text-lg md:text-xl font-semibold text-black">POR APENAS</p>
                <p className="mb-2 text-5xl md:text-6xl font-bold text-[#1fa347]">R$ 9,99</p>
                <p className="text-sm md:text-base font-semibold text-black underline">Oferta Única - Seja Rápido</p>
              </div>

              {/* Lista de features */}
              <div className="mb-8 space-y-3">
                {featuresSimples.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 rounded-xl bg-[#f5efd8] px-4 py-3">
                    <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#1fa347]">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-sm leading-relaxed md:text-base text-[#4a2c0b]">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Botão */}
              <div className="mb-6 flex justify-center">
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full max-w-md rounded-lg bg-[#1fa347] px-12 py-5 text-lg font-semibold text-white hover:bg-[#188e3a]"
                  onClick={() => window.open("https://pay.kirvano.com/0d6aec4a-3d96-4986-a90e-7edc9a100bf8", "_blank")}
                >
                  Comprar Agora
                </Button>
              </div>

              {/* Footer */}
              <p className="mb-4 text-center text-sm font-semibold text-gray-600">Garantia de 90 Dias</p>

              <p className="text-center text-xs font-semibold text-gray-600 uppercase tracking-[0.3em]">12 Meses de Acesso</p>
            </div>
          </div>

          {/* Combo Completo - Lado Direito */}
          <div className="rounded-[32px] bg-white shadow-[0_35px_80px_rgba(0,0,0,0.35)] overflow-hidden border-4 border-[#1fa347] animate-pulse-border">
            {/* Banner marrom escuro no topo */}
            <div className="bg-[#463015] px-6 py-4 text-center">
              <h2 className="text-lg font-bold uppercase text-white tracking-wide">
                COMBO COMPLETO ALTAFÉ
              </h2>
            </div>

            <div className="px-6 py-10 md:px-12 md:py-12">
              <p className="mb-6 text-center text-sm font-semibold text-black">
                +60 Personagens Para Você Escolher e Iniciar os Estudos
              </p>

              {/* Imagem hero horizontal */}
              <div className="mb-8 flex justify-center">
                <img 
                  src="/imagem hero - sem fundo.png" 
                  alt="Personagens AltaFé" 
                  className="w-full max-w-full rounded-2xl" 
                />
              </div>

              {/* Preços */}
              <div className="mb-8 text-center">
                <p className="mb-2 text-2xl md:text-3xl font-semibold line-through text-red-600">DE R$199,90</p>
                <p className="mb-2 text-lg md:text-xl font-semibold text-black">POR APENAS</p>
                <p className="mb-2 text-5xl md:text-6xl font-bold text-[#1fa347]">R$ 29,90</p>
                <p className="text-sm md:text-base font-semibold text-black underline">Oferta Única - Seja Rápido</p>
              </div>

              {/* Lista de features */}
              <div className="mb-8 space-y-3">
                {featuresCompleto.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 rounded-xl bg-[#f5efd8] px-4 py-3">
                    <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#1fa347]">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-sm leading-relaxed md:text-base text-[#4a2c0b]">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Botão */}
              <div className="mb-6 flex justify-center">
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full max-w-md rounded-lg bg-[#1fa347] px-12 py-5 text-lg font-semibold text-white hover:bg-[#188e3a]"
                  onClick={() => window.open("https://pay.kirvano.com/0d6aec4a-3d96-4986-a90e-7edc9a100bf8", "_blank")}
                >
                  Comprar Agora
                </Button>
              </div>

              {/* Footer */}
              <p className="mb-4 text-center text-sm font-semibold text-gray-600">Garantia de 90 Dias</p>

              <p className="text-center text-xs font-semibold text-gray-600 uppercase tracking-[0.3em]">12 Meses de Acesso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
