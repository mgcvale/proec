import { BookOpenCheck, CircleCheckBig, ClockFading, ListCheck } from 'lucide-react';
import React from 'react';

/**
 * Component that displays key course information in a grid layout
 * @returns {JSX.Element} Course information display
 */
const CourseInfo = () => {
  return (
    <section className="w-full max-w-4xl mx-auto mt-16 mb-16">
      <div className="text-fg-muted uppercase text-sm tracking-wider mb-2">
        INFORMAÇÕES DO CURSO
      </div>
      
      <h2 className="text-fg text-3xl font-bold mb-6">
        O que esperar
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-surface-border rounded-lg overflow-hidden border border-surface-border">
        {/* Skill Level */}
        <div className="bg-bg p-6 flex justify-start items-center gap-4">
          <div className="text-accent-1-500">
            <BookOpenCheck size={32}></BookOpenCheck>
          </div>
          <div>
            <div className="text-fg-muted uppercase text-xs tracking-[0.125em]">
              NÍVEL DE HABILIDADE
            </div>
            <div className="text-fg text-lg">
              Iniciante
            </div>
          </div>
        </div>
        
        {/* Average Time */}
        <div className="bg-bg p-6 flex justify-start items-center gap-4">
          <div className="text-accent-1-500">
            <ClockFading size={32}></ClockFading>
          </div>
          <div>
            <div className="text-fg-muted uppercase text-xs tracking-[0.125em] mb-1">
              TEMPO MÉDIO
            </div>
            <div className="text-fg text-lg">
              X Horas
            </div>
          </div>
        </div>
        
        {/* Certificate */}
        <div className="bg-bg p-6 flex items-center justify-start gap-4">
          <div className="text-accent-1-500">
            <CircleCheckBig size={32}></CircleCheckBig>
          </div>
          <div>
            <div className="text-fg-muted uppercase text-xs tracking-[0.125em] mb-1">
              CERTIFICADO
            </div>
            <div className="text-fg text-lg">
              Após o término - ?
            </div>
          </div>
        </div>
        
        {/* Prerequisites */}
        <div className="bg-bg p-6 flex items-center justify-start gap-4">
          <div className="text-accent-1-500">
            <ListCheck size={32}></ListCheck>
          </div>
          <div>
            <div className="text-fg-muted uppercase text-xs tracking-[0.125em] mb-1">
              PRE-REQUISITOS
            </div>
            <div className="text-fg text-lg">
              Nenhum
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseInfo;