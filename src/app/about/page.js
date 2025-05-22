"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-fg">Sobre a PROEC</h1>
          
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-xl mb-8 text-fg-muted">
              A Plataforma de Recursos e Orientação para Educação Continuada (PROEC) 
              é uma iniciativa educacional dedicada ao desenvolvimento profissional 
              e acadêmico contínuo.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Nossa Missão</h2>
            <p>
              Fornecer acesso a recursos educacionais de alta qualidade que permitam 
              aos estudantes e profissionais continuarem seu desenvolvimento acadêmico 
              e profissional ao longo da vida.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Nossa Visão</h2>
            <p>
              Ser reconhecida como uma plataforma educacional líder que transforma vidas 
              através do acesso à educação continuada de qualidade, inovadora e acessível.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Nossos Valores</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Excelência:</strong> Compromisso com a qualidade em tudo o que fazemos.</li>
              <li><strong>Inovação:</strong> Busca constante por novas metodologias e tecnologias educacionais.</li>
              <li><strong>Acessibilidade:</strong> Garantir que o conhecimento esteja ao alcance de todos.</li>
              <li><strong>Colaboração:</strong> Trabalhar juntos para alcançar resultados extraordinários.</li>
              <li><strong>Ética:</strong> Atuar com integridade e responsabilidade em todas as nossas ações.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Nossa História</h2>
            <p>
              Fundada em 2020, a PROEC nasceu da percepção da crescente necessidade de 
              educação continuada em um mundo em rápida transformação. Desde então, temos 
              trabalhado incansavelmente para desenvolver uma plataforma que conecte 
              estudantes a recursos educacionais de qualidade e que promova o aprendizado 
              ao longo da vida.
            </p>
            <p>
              Ao longo dos anos, expandimos nossa oferta de cursos e estabelecemos parcerias 
              com instituições educacionais renomadas para garantir a excelência acadêmica 
              em nossos programas.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}