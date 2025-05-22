"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

// Sample course data
const coursesData = [
  {
    id: "web-development",
    title: "Desenvolvimento Web Moderno",
    category: "Tecnologia",
    level: "Intermediário",
    duration: "12 semanas",
    description: "Aprenda as mais recentes tecnologias e frameworks para desenvolvimento web, incluindo React, Next.js e Node.js.",
    image: "/courses/web-dev.jpg"
  },
  {
    id: "data-science",
    title: "Ciência de Dados e Análise",
    category: "Tecnologia",
    level: "Avançado",
    duration: "16 semanas",
    description: "Explore técnicas avançadas de análise de dados, aprendizado de máquina e visualização de dados.",
    image: "/courses/data-science.jpg"
  },
  {
    id: "mobile-apps",
    title: "Desenvolvimento de Aplicativos Móveis",
    category: "Tecnologia",
    level: "Intermediário",
    duration: "10 semanas",
    description: "Crie aplicativos móveis nativos e multiplataforma para iOS e Android utilizando React Native.",
    image: "/courses/mobile-apps.jpg"
  },
  {
    id: "digital-marketing",
    title: "Marketing Digital",
    category: "Marketing",
    level: "Iniciante",
    duration: "8 semanas",
    description: "Aprenda estratégias eficazes de marketing digital, SEO, mídias sociais e análise de desempenho.",
    image: "/courses/digital-marketing.jpg"
  },
  {
    id: "ux-design",
    title: "Design de Experiência do Usuário (UX)",
    category: "Design",
    level: "Intermediário",
    duration: "9 semanas",
    description: "Domine os princípios de UX/UI design e aprenda a criar interfaces intuitivas e centradas no usuário.",
    image: "/courses/ux-design.jpg"
  },
  {
    id: "project-management",
    title: "Gestão de Projetos Ágeis",
    category: "Gestão",
    level: "Intermediário",
    duration: "6 semanas",
    description: "Aprenda metodologias ágeis como Scrum e Kanban para gerenciar projetos de forma eficiente.",
    image: "/courses/project-management.jpg"
  }
];

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  
  const categories = ["Todos", ...new Set(coursesData.map(course => course.category))];
  
  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || course.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-fg">Explorar Cursos</h1>
          <p className="text-lg mb-8 text-fg-muted">
            Explore as diferentes etapas do curso de robótica educacional
          </p>
          
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Faça uma busca..."
                  className="w-full p-3 pl-10 bg-surface border border-surface-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500"
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
                className="w-full p-3 bg-surface border border-surface-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500 appearance-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          
          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <div key={course.id} className="bg-surface border border-surface-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-accent-1-100 dark:bg-accent-1-900 dark:bg-opacity-20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-accent-1-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="px-3 py-1 bg-accent-1-100 dark:bg-accent-1-900 dark:bg-opacity-20 text-accent-1-700 dark:text-accent-1-300 text-xs rounded-full">
                        {course.category}
                      </span>
                      <span className="text-sm text-fg-muted">{course.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-fg-muted mb-4 text-sm line-clamp-2">{course.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-fg-muted">{course.level}</span>
                      <a 
                        href={`/courses/${course.id}`}
                        className="px-4 py-2 bg-accent-1-500 text-white rounded-lg hover:bg-accent-1-700 transition-colors text-sm"
                      >
                        Ver Curso
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-fg-muted mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <h3 className="text-xl font-medium mb-2">Nenhum curso encontrado</h3>
              <p className="text-fg-muted">Tente ajustar seus critérios de busca</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </main>
  );
}