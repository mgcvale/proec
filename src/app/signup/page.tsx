"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { School, Users, ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

export default function SignupSelection(): ReactNode {
  
  const router = useRouter();

  const handleSchoolSignup = (): void => {
    router.push("/school/signup");
  };

  const handleTeacherSignup = (): void => {
    router.push("/teacher/signup")
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-2 text-fg">Criar Conta no PROEC</h1>
          <p className="text-fg-muted mb-12">
            Escolha o tipo de conta que deseja criar para começar sua jornada de robótica educacional.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* School Card */}
            <div className="bg-surface border border-surface-border rounded-lg p-8 hover:border-accent-1-500 transition-colors cursor-pointer group"
                 onClick={handleSchoolSignup}>
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 bg-accent-1-100 dark:bg-accent-1-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-1-200 dark:group-hover:bg-accent-1-900/50 transition-colors">
                  <School className="w-8 h-8 text-accent-1-600 dark:text-accent-1-400" />
                </div>
                
                <h2 className="text-xl font-semibold mb-3 text-fg">Sou uma Escola</h2>
                
                <p className="text-fg-muted mb-6 leading-relaxed">
                  Registre sua instituição de ensino, gerencie professores e organize os cursos disponibilizados pela plataforma.
                </p>
                
                <ul className="text-sm text-fg-muted mb-6 space-y-2 text-left w-full">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent-1-500 rounded-full mr-2"></div>
                    Gerenciar professores
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent-1-500 rounded-full mr-2"></div>
                    Organizar cursos de robótica
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent-1-500 rounded-full mr-2"></div>
                    Acompanhar relatórios e métricas
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent-1-500 rounded-full mr-2"></div>
                    Gerar tokens para professores
                  </li>
                </ul>
                <div className="spacer grow max-h-full"></div>
                
                <button 
                  className="w-full px-6 py-3 bg-accent-1-500 text-white rounded-lg hover:bg-accent-1-700 transition-colors flex items-center justify-center group-hover:bg-accent-1-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSchoolSignup();
                  }}
                >
                  Cadastrar Escola
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
            
            {/* Teacher Card */}
            <div className="bg-surface border border-surface-border rounded-lg p-8 hover:border-accent-1-500 transition-colors cursor-pointer group"
                 onClick={handleTeacherSignup}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent-1-100 dark:bg-accent-1-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-1-200 dark:group-hover:bg-accent-1-900/50 transition-colors">
                  <Users className="w-8 h-8 text-accent-1-600 dark:text-accent-1-400" />
                </div>
                
                <h2 className="text-xl font-semibold mb-3 text-fg">Sou um Professor</h2>
                
                <p className="text-fg-muted mb-6 leading-relaxed">
                  Junte-se à sua escola para acessar os cursos oferecidos, gerenciar turmas e acompanhar o progresso de seus alunos.
                </p>
                
                <ul className="text-sm text-fg-muted mb-6 space-y-2 text-left w-full">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent-1-500 rounded-full mr-2"></div>
                    Acessar cursos e materiais
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent-1-500 rounded-full mr-2"></div>
                    Gerenciar turmas e alunos
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent-1-500 rounded-full mr-2"></div>
                    Acompanhar progresso individual
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent-1-500 rounded-full mr-2"></div>
                    Colaborar com outros professores (?)
                  </li>
                </ul>

                <div className="spacer grow max-h-full"></div>
                
                <button 
                  className="w-full px-6 py-3 bg-accent-1-500 text-white rounded-lg hover:bg-accent-1-700 transition-colors flex items-center justify-center group-hover:bg-accent-1-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTeacherSignup();
                  }}
                >
                  Cadastrar Professor
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center text-md">
            <p className="text-fg-muted">
              Já tem uma conta? <a href="/login" className="text-accent-1-500 hover:underline">Entrar</a>
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}