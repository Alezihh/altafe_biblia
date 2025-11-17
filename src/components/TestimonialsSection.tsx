import Logo from "./Logo";
const TestimonialsSection = () => {
  const testimonials = [{
    text: "Que benção de Deus,🙏\nO AltaFé é maravilhoso para estudo. Já estou usando a 8 dias e me surpreendo a cada dia. Hoje pela manhã no estudo eu escolhi Paulo.",
    highlight: "Me explicou sobre Apocalipse tudo detalhado. Eu tinha muitas dúvidas, estou entendendo bem melhor agora 👍👍👍",
    time: "11:48"
  }, {
    text: "Meu pastor me apresentou hoje no culto o AltaFé, vocês fizeram algo incrível! ✅",
    highlight: "Os personagens conseguem explicar certinho sobre os textos originais. Tive um estudo sobre a vida de Cristo e a crucificação. Foi muito edificante",
    time: "13:22"
  }, {
    text: "Estou muito feliz por Deus ter me mostrado o AltaFé. Está tirando todas as minhas dúvidas da palavra. Eu estudo com a Bíblia ao lado e facilita demais o estudo 👏👏",
    highlight: "Estou compartilhando com os irmãos da minha igreja. Muito bom amigo",
    time: "13:57"
  }];
  return <section className="bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-muted/20 rounded-lg p-6 shadow-md">
              <p className="text-sm text-foreground mb-4 whitespace-pre-line">
                {testimonial.text}
              </p>
              <p className="text-sm text-foreground font-semibold mb-2 whitespace-pre-line">
                {testimonial.highlight}
              </p>
              <p className="text-xs text-muted-foreground text-right">{testimonial.time}</p>
            </div>)}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-muted/10 rounded-lg p-6">
            <p className="text-lg font-semibold text-foreground mb-4">
              Estudos e orações maravilhosos. São muitos personagens pra gente escolher. Obg
            </p>
          </div>
          
          <div className="bg-muted/10 rounded-lg p-6">
            <p className="text-lg font-semibold text-foreground mb-4">
              Muito bom essa nova forma de estudar. Está me ajudando a compreender sem aquelas dificuldades de interpretação. Graça e paz 📖
            </p>
          </div>
        </div>
        
        
      </div>
    </section>;
};
export default TestimonialsSection;