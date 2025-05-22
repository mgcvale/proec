import { type FAQItem } from '@/types';
import { Plus } from 'lucide-react';
import { useState } from 'react';

/**
 * FAQ item component with toggle functionality
 * @param {Object} props - Component props
 * @param {string} props.question - The FAQ question
 * @param {string} props.answer - The FAQ answer
 * @param {boolean} props.defaultOpen - Whether the item is open by default
 * @returns {JSX.Element} FAQ item component
 */
const FAQItem = ({ question, answer, defaultOpen = false }: {question: string, answer: string, defaultOpen?: boolean}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-surface-border last:border-b-0">
      <button
        className="w-full py-5 px-4 flex justify-start gap-3 items-center text-left focus:outline-none hover:*:text-accent-1-500 cursor-pointer *:transition-colors *:duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen} 
      >
        <div className="text-accent-1-500">
          <div
            className={`transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isOpen ? 'rotate-45' : 'rotate-0'
            }`}
          >
            <Plus size={24} />
          </div>
        </div>
        <h3 className="text-lg font-medium text-fg">{question}</h3>
      </button>

      <div
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="overflow-hidden">
          <div className="px-11 pb-5">
            <p className="text-fg-muted">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: "O que eu aprenderei neste curso?",
      answer:
        "Você adquirirá todas as habilidades e conhecimentos necessários para se tornar um educador de robótica, incluindo programação, eletrônica, mecânica básica e metodologias de ensino, preparando-se para transmitir esses conceitos de forma didática e envolvente.",
    },
    {
      question: "Quais conhecimentos prévios eu preciso para fazer este curso?",
      answer:
        "Nenhum! O curso é desenvolvido com uma abordagem acessível e prática, adequada para educadores com qualquer nível de conhecimento na área.",
    },
    {
      question: "O quão longo é o curso, e quanto tempo eu devo decicar a ele?",
      answer: "O curso dura cerca de X meses, com um tempo médio de dedicação total de Y horas.",
    },
    {
      question: "Eu vou precisar aprender eletrônica e programação?",
      answer:
        "Não! Enquanto o Kit utilizado no curso envolve essas áreas, você não precisará aprender esses conteúdos de forma detalhada - o foco do curso é na didática e aplicação prática e pedagógica dos conceitos.",
    },
    {
      question: "Para quem é este curso?",
      answer:
        "O curso foi feito para professores e educadores que estejam interessados em ampliar suas áreas de atuação e usufruir da robótica para oferecer um ensino mais completo e moderno aos seus alunos.",
    },
    {
      question: "Quais são os objetivos desse curso?",
      answer:
        "O curso tem como objetivo ampliar a formação dos professores matriculados, permitindo-os a utilizar a robótica de maneira didática e pedagógica, visando melhorar a qualidade e dinâmica das aulas.",
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto mt-16 mb-16">
      <div className="text-fg-muted uppercase text-sm tracking-[0.13em] mb-2">
        FAQ
      </div>

      <h2 className="text-fg text-3xl font-bold mb-6">Perguntas Frequentes</h2>

      <div className="bg-surface border border-surface-border rounded-lg overflow-hidden">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            defaultOpen={index === 1} // Second item is open by default
          />
        ))}
      </div>
    </section>
  );
}