"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { School, Users, ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

export default function LoginSelection(): ReactNode {
  const router = useRouter();

  const handleSchoolLogin = (): void => {
    router.push("/school/login");
  };

  const handleTeacherLogin = (): void => {
    router.push("/teacher/login")
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-2 text-fg">Faça login no PROEC</h1>
          <p className="text-fg-muted mb-12">
            Escolha o tipo de conta que você tem para realizar seu Log-in.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-surface border border-surface-border rounded-lg p-8 hover:border-accent-1-500 transition-colors cursor-pointer group"
                 onClick={handleSchoolLogin}>
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 bg-accent-1-100 dark:bg-accent-1-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-1-200 dark:group-hover:bg-accent-1-900/50 transition-colors">
                  <School className="w-8 h-8 text-accent-1-600 dark:text-accent-1-400" />
                </div>
                
                <h2 className="text-xl font-semibold mb-3 text-fg">Sou uma Escola</h2>
                
                <p className="text-fg-muted mb-6 leading-relaxed">
                  Faça login como instituição de ensino para ter acesso à sua dashboard.
                </p>
                
                <div className="spacer grow max-h-full"></div>
                
                <button 
                  className="w-full px-6 py-3 bg-accent-1-500 text-white rounded-lg hover:bg-accent-1-700 transition-colors flex items-center justify-center group-hover:bg-accent-1-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSchoolLogin();
                  }}
                >
                  Cadastrar Escola
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
            
            {/* Teacher Card */}
            <div className="bg-surface border border-surface-border rounded-lg p-8 hover:border-accent-1-500 transition-colors cursor-pointer group"
                 onClick={handleTeacherLogin}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent-1-100 dark:bg-accent-1-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-1-200 dark:group-hover:bg-accent-1-900/50 transition-colors">
                  <Users className="w-8 h-8 text-accent-1-600 dark:text-accent-1-400" />
                </div>
                
                <h2 className="text-xl font-semibold mb-3 text-fg">Sou um Professor</h2>
                
                <p className="text-fg-muted mb-6 leading-relaxed">
                    Faça login com sua conta de professor para ter acesso aos seus cursos e materiais.
                </p>

                <div className="spacer grow max-h min-h-8"></div>
                
                <button 
                  className="w-full px-6 py-3 bg-accent-1-500 text-white rounded-lg hover:bg-accent-1-700 transition-colors flex items-center justify-center group-hover:bg-accent-1-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTeacherLogin();
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
              Não tem uma conta? <a href="/signup" className="text-accent-1-500 hover:underline">Crie sua conta</a>.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}