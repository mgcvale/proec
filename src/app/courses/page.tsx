"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";
import { CourseColor, CourseModule, type CourseData } from "@/types";

const roboticsCourseData : CourseData[] = [
  {
    id: "1st-grade",
    grade: "1º Ano",
    title: "Introdução à Robótica para 1º Ano",
    modules: [
      {
        title: "Conhecendo os Robôs",
        skills: ["Identificação de robôs no dia a dia", "Introdução a formas e cores básicas", "Desenvolvimento de coordenação motora fina"],
        activities: ["Montagem de robôs simples com blocos", "Desenho e colorir robôs", "Jogos interativos de reconhecimento"],
        icon: "🤖"
      },
      {
        title: "Movimentos Básicos",
        skills: ["Direções cardinais (frente, trás, esquerda, direita)", "Sequências simples", "Contagem básica"],
        activities: ["Tapete de programação com comandos por cores", "Exercícios lúdicos de movimento", "Brincadeiras de seguir instruções"],
        icon: "➡️"
      },
      {
        title: "Histórias e Robôs",
        skills: ["Criatividade e imaginação", "Narrativa simples", "Trabalho em equipe"],
        activities: ["Teatro de robôs", "Criação de histórias sobre robôs ajudantes", "Desenho de robôs para diferentes tarefas"],
        icon: "📚"
      }
    ],
    description: "Um primeiro contato divertido e lúdico com o mundo da robótica, desenvolvendo habilidades básicas de raciocínio lógico e criatividade.",
    color: "indigo"
  },
  {
    id: "2nd-grade",
    grade: "2º Ano",
    title: "Robótica Criativa para 2º Ano",
    modules: [
      {
        title: "Componentes e Estruturas",
        skills: ["Identificação de componentes básicos", "Noções de equilíbrio e estabilidade", "Resolução de problemas simples"],
        activities: ["Montagem de estruturas com blocos de encaixe", "Testes de equilíbrio", "Criação de robôs com materiais recicláveis"],
        icon: "🔧"
      },
      {
        title: "Introdução à Programação",
        skills: ["Sequências de comandos", "Causa e efeito", "Pensamento computacional básico"],
        activities: ["Jogos de programação sem computador", "Desafios de sequenciamento", "Criação de rotinas simples"],
        icon: "💻"
      },
      {
        title: "Robôs e Meio Ambiente",
        skills: ["Consciência ambiental", "Classificação de materiais", "Trabalho colaborativo"],
        activities: ["Projeto de robô coletor de lixo", "Separação de resíduos com robôs", "Histórias sobre robôs que ajudam a natureza"],
        icon: "🌱"
      }
    ],
    description: "Ampliação do conhecimento sobre robótica com introdução a conceitos básicos de programação e consciência ambiental.",
    color: "blue"
  },
  {
    id: "3rd-grade",
    grade: "3º Ano",
    title: "Desafios Robóticos para 3º Ano",
    modules: [
      {
        title: "Sensores e Interação",
        skills: ["Compreensão de sensores básicos", "Ação e reação", "Observação e coleta de dados simples"],
        activities: ["Experimentos com sensores de toque", "Construção de robôs que reagem a estímulos", "Jogos de estímulo-resposta"],
        icon: "👁️"
      },
      {
        title: "Programação em Blocos",
        skills: ["Lógica de programação visual", "Loops simples", "Depuração básica"],
        activities: ["Introdução a plataformas de programação em blocos", "Criação de animações simples", "Programação de movimentos sequenciais"],
        icon: "🧩"
      },
      {
        title: "Desafios de Engenharia",
        skills: ["Resolução de problemas", "Planejamento básico", "Teste e melhoria"],
        activities: ["Construção de pontes e estruturas", "Desafios de transporte de objetos", "Competições amigáveis de robótica"],
        icon: "🏗️"
      }
    ],
    description: "Introdução a conceitos mais avançados de robótica com ênfase em sensores, programação em blocos e resolução de problemas de engenharia.",
    color: "cyan"
  },
  {
    id: "4th-grade",
    grade: "4º Ano",
    title: "Robótica Aplicada para 4º Ano",
    modules: [
      {
        title: "Robótica e Matemática",
        skills: ["Medições e unidades", "Geometria aplicada", "Cálculos simples"],
        activities: ["Construção de figuras geométricas com robôs", "Desafios de medição e distância", "Problemas matemáticos com robótica"],
        icon: "📏"
      },
      {
        title: "Programação Intermediária",
        skills: ["Condicionais simples (se-então)", "Variáveis básicas", "Sequências mais complexas"],
        activities: ["Programação de comportamentos baseados em condições", "Criação de jogos simples", "Robôs que tomam decisões"],
        icon: "🔄"
      },
      {
        title: "Automação e Cotidiano",
        skills: ["Identificação de automações no dia a dia", "Pensamento criativo", "Design de soluções"],
        activities: ["Projeto de casa inteligente", "Criação de dispositivos automatizados simples", "Discussão sobre tecnologia no cotidiano"],
        icon: "🏠"
      }
    ],
    description: "Aprofundamento em robótica educacional com aplicações práticas em matemática e introdução à automação, estimulando o pensamento crítico.",
    color: "teal"
  },
  {
    id: "5th-grade",
    grade: "5º Ano",
    title: "Robótica Avançada para 5º Ano",
    modules: [
      {
        title: "Robótica e Ciências",
        skills: ["Método científico básico", "Coleta e análise de dados", "Formulação de hipóteses"],
        activities: ["Experimentos científicos com robôs", "Medição de variáveis ambientais", "Projetos de pesquisa simples"],
        icon: "🔬"
      },
      {
        title: "Programação Avançada",
        skills: ["Funções simples", "Múltiplos sensores", "Algoritmos mais complexos"],
        activities: ["Criação de projetos com múltiplos sensores", "Programação de comportamentos complexos", "Resolução de labirintos"],
        icon: "📊"
      },
      {
        title: "Projeto Final Integrado",
        skills: ["Planejamento de projetos", "Documentação básica", "Apresentação e comunicação"],
        activities: ["Desenvolvimento de projeto robótico completo", "Documentação do processo de criação", "Feira de robótica para apresentação"],
        icon: "🏆"
      }
    ],
    description: "Culminação do aprendizado em robótica do ensino fundamental I com projetos mais complexos e integração com outras disciplinas.",
    color: "green"
  },
  {
    id: "teacher-training",
    grade: "Formação de Professores",
    title: "Capacitação em Robótica Educacional",
    modules: [
      {
        title: "Fundamentos da Robótica Educacional",
        skills: [
          "Compreensão dos objetivos pedagógicos da robótica",
          "Familiarização com kits e ferramentas disponíveis",
          "Planejamento de aulas interdisciplinares"
        ],
        activities: [
          "Workshops com uso de kits reais",
          "Estudos de caso de aulas de robótica",
          "Elaboração de planos de aula"
        ],
        icon: "🎓"
      },
      {
        title: "Metodologias de Ensino",
        skills: [
          "Aprendizagem baseada em projetos",
          "Uso de jogos e dinâmicas em sala",
          "Avaliação de competências"
        ],
        activities: [
          "Simulações de aula",
          "Criação de atividades lúdicas",
          "Discussão sobre práticas avaliativas"
        ],
        icon: "📘"
      },
      {
        title: "Suporte e Adaptação",
        skills: [
          "Adaptação para diferentes faixas etárias",
          "Inclusão de alunos com necessidades especiais",
          "Gestão de tempo e recursos"
        ],
        activities: [
          "Dinâmicas de grupo sobre inclusão",
          "Estudos de caso",
          "Criação de cronogramas realistas"
        ],
        icon: "🛠️"
      }
    ],
    description: "Curso principal voltado para capacitação de professores, com foco em metodologias ativas, uso de tecnologia em sala de aula e planejamento pedagógico da robótica educacional.",
    color: "purple"
  },
];

export default function Courses() {
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter courses based on search and selected grade
  const filteredCourses = roboticsCourseData.filter(course => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.modules.some(module => 
        module.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        module.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    
    const matchesGrade = selectedGrade === "all" || course.id === selectedGrade;
    
    return matchesSearch && matchesGrade;
  });
  
  const getColorClass = (color: CourseColor): string => {
    const colorMap = {
      indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:bg-opacity-30 dark:text-indigo-300",
      blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:bg-opacity-30 dark:text-blue-300",
      cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:bg-opacity-30 dark:text-cyan-300",
      teal: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:bg-opacity-30 dark:text-teal-300",
      green: "bg-green-100 text-green-800 dark:bg-green-900 dark:bg-opacity-30 dark:text-green-300",
      purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:bg-opacity-30 dark:text-purple-300"
    };
    return colorMap[color] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-fg">Curso de Robótica Educacional</h1>
          <p className="text-lg mb-8 text-fg-muted">
            Conheça o conteúdo programático do nosso curso de robótica para o Ensino Fundamental I
          </p>
          
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar conteúdos e habilidades..."
                  className="w-full p-3 pl-10 bg-surface border border-surface-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-fg-muted">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
            </div>
            
            <div className="md:w-64">
              <select
                className="w-full p-3 bg-surface border border-surface-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
              >
                <option value="all">Todos os Anos</option>
                {roboticsCourseData.map(course => (
                  <option key={course.id} value={course.id}>{course.grade}</option>
                ))}
              </select>
            </div>
          </div>
          
          {filteredCourses.length > 0 ? (
            <div className="space-y-12">
              {filteredCourses.map(course => (
                <div key={course.id} className="bg-surface border border-surface-border rounded-lg overflow-hidden">
                  <div className="p-6 border-b border-surface-border">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <span className={`px-3 py-1 text-sm rounded-full ${getColorClass(course.color)}`}>
                          {course.grade}
                        </span>
                        <h2 className="text-2xl font-semibold mt-3">{course.title}</h2>
                      </div>
                      <Link 
                        href={`/courses/${course.id}`}
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors text-sm"
                      >
                        Ver Detalhes
                      </Link>
                    </div>
                    <p className="text-fg-muted">{course.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-px bg-surface-border">
                    {course.modules.map((module: CourseModule, index) => (
                      <div key={index} className="bg-surface p-6">
                        <div className="text-4xl mb-3">{module.icon}</div>
                        <h3 className="text-lg font-medium mb-3">{module.title}</h3>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-fg-muted mb-2">Habilidades desenvolvidas:</h4>
                          <ul className="text-sm space-y-1 list-disc list-inside">
                            {module.skills.map((skill, i) => (
                              <li key={i}>{skill}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-fg-muted mb-2">Atividades principais:</h4>
                          <ul className="text-sm space-y-1 list-disc list-inside">
                            {module.activities.map((activity, i) => (
                              <li key={i}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-fg-muted mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <h3 className="text-xl font-medium mb-2">Nenhum conteúdo encontrado</h3>
              <p className="text-fg-muted">Tente ajustar seus critérios de busca</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </main>
  );
}