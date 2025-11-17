import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como o AltaFé funciona?",
      answer: "O AltaFé é um ambiente online único que permite você conversar diretamente com personagens bíblicos como Jesus, Moisés e Paulo, aprendendo com suas histórias de forma interativa e personalizada."
    },
    {
      question: "Preciso ter conhecimento avançado da Bíblia para usar?",
      answer: "Não! O AltaFé foi desenvolvido para todos os níveis de conhecimento, desde iniciantes até estudiosos avançados. Os personagens se adaptam ao seu nível de entendimento."
    },
    {
      question: "O AltaFé é fiel à Bíblia?",
      answer: "Sim! Todas as respostas são baseadas 100% nas Escrituras, mantendo total fidelidade ao contexto teológico original."
    },
    {
      question: "Posso usar em qualquer dispositivo?",
      answer: "Sim! Você pode acessar de celular, computador ou tablet, a qualquer hora do dia."
    },
    {
      question: "O personagem Jesus responde como se fosse o próprio Jesus Cristo?",
      answer: "Os personagens respondem de forma interativa baseada nas Escrituras, ajudando você a compreender melhor os ensinamentos bíblicos."
    },
    {
      question: "Existe um limite de uso?",
      answer: "Não! Você tem acesso ilimitado para estudar e interagir com os personagens quando quiser."
    },
    {
      question: "Preciso de conexão com a internet para usar?",
      answer: "Sim, é necessário conexão com internet para acessar a plataforma e interagir com os personagens."
    },
    {
      question: "É seguro usar o AltaFé?",
      answer: "Completamente seguro! Sua privacidade e dados são protegidos."
    },
    {
      question: "Quanto tempo preciso para aprender a usar?",
      answer: "É muito simples e intuitivo! Em poucos minutos você já estará estudando e aprendendo."
    },
    {
      question: "É indicado para quem busca conhecimento teológico profundo?",
      answer: "Sim! A plataforma oferece insights profundos baseados nas Escrituras para todos os níveis de estudo."
    },
    {
      question: "O AltaFé pode me ajudar a fortalecer minha fé?",
      answer: "Sim! Através do estudo aprofundado da Palavra, você fortalecerá sua conexão com Deus e sua compreensão da fé cristã."
    },
    {
      question: "O AltaFé substitui a leitura da Bíblia?",
      answer: "Não! É uma ferramenta complementar que enriquece seu estudo da Bíblia, tornando-o mais profundo e compreensível."
    },
    {
      question: "Como Recebo Meu Acesso ao AltaFé?",
      answer: "Após a compra, você receberá imediatamente as credenciais de acesso por email para começar seus estudos."
    },
    {
      question: "Tem Garantia?",
      answer: "Sim! Oferecemos garantia de 90 dias. Se não ficar satisfeito, devolvemos 100% do seu investimento."
    }
  ];

  return (
    <section className="bg-brown-dark py-16 px-4" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cream mb-12">
          Perguntas Frequentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-brown-medium border-2 border-gold/30 rounded-lg px-6"
            >
              <AccordionTrigger className="text-cream hover:text-gold-light text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-cream/90 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
