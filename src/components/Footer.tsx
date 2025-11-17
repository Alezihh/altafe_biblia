const Footer = () => {
  return (
    <footer className="bg-black py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <img
            src="/logo altafe - sem fundo.png"
            alt="AltaFé"
            className="h-12 md:h-16 w-auto opacity-90"
          />
        </div>
        
        <div className="text-white/70 space-y-2 mb-6">
          <p className="font-semibold">Razão Social: GABRIELA RESENDE INÁCIO LTDA</p>
          <p>CNPJ: 56.491.831/0001-98</p>
        </div>
        
        <p className="text-white/60 text-sm max-w-3xl mx-auto leading-relaxed">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
