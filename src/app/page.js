"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-fg">
            Bem-vindo à PROEC
          </h1>
          <p className="text-xl mb-8 text-fg-muted">
            Plataforma de Recursos e Orientação para Educação Continuada
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-surface p-6 rounded-lg border border-surface-border">
              <h2 className="text-2xl font-semibold mb-3 text-fg">Cursos em Destaque</h2>
              <ul className="space-y-2">
                <li className="p-2 hover:bg-bg rounded">
                  <a href="/courses/web-development" className="flex items-center">
                    <span className="w-2 h-2 bg-accent-1-500 rounded-full mr-2"></span>
                    <span>Desenvolvimento Web Moderno</span>
                  </a>
                </li>
                <li className="p-2 hover:bg-bg rounded">
                  <a href="/courses/data-science" className="flex items-center">
                    <span className="w-2 h-2 bg-accent-1-500 rounded-full mr-2"></span>
                    <span>Ciência de Dados e Análise</span>
                  </a>
                </li>
                <li className="p-2 hover:bg-bg rounded">
                  <a href="/courses/mobile-apps" className="flex items-center">
                    <span className="w-2 h-2 bg-accent-1-500 rounded-full mr-2"></span>
                    <span>Desenvolvimento de Aplicativos Móveis</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="bg-surface p-6 rounded-lg border border-surface-border">
              <h2 className="text-2xl font-semibold mb-3 text-fg">Próximos Eventos</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-accent-2-500 pl-3">
                  <p className="font-medium">Workshop de React.js</p>
                  <p className="text-sm text-fg-muted">15 de Outubro, 2024 • 14:00-17:00</p>
                </div>
                <div className="border-l-4 border-accent-2-500 pl-3">
                  <p className="font-medium">Palestra: IA na Educação</p>
                  <p className="text-sm text-fg-muted">22 de Outubro, 2024 • 19:00-21:00</p>
                </div>
                <div className="border-l-4 border-accent-2-500 pl-3">
                  <p className="font-medium">Hackathon de Inovação</p>
                  <p className="text-sm text-fg-muted">5-7 de Novembro, 2024</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-accent-1-100 dark:bg-opacity-10 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-accent-1-700 dark:text-accent-1-300">
              Comece sua jornada de aprendizado hoje
            </h2>
            <p className="mb-6">
              Acesse milhares de cursos, workshops e materiais exclusivos para aprimorar suas habilidades e avançar em sua carreira.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/courses" className="px-6 py-3 bg-accent-1-500 text-white rounded-lg hover:bg-accent-1-700 transition-colors">
                Explorar Cursos
              </a>
              <a href="/signup" className="px-6 py-3 border border-accent-1-500 text-accent-1-500 rounded-lg hover:bg-accent-1-100 dark:hover:bg-opacity-20 transition-colors">
                Criar Conta
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}