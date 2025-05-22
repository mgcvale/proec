import { Check, CheckCheck, CheckCircle } from "lucide-react";

export default function AcquiredSkills() {
    
    return (
    <section className="w-full max-w-4xl mx-auto mt-16 mb-16">
        <div className="text-fg-muted uppercase text-sm tracking-[0.13em] mb-2">
           HABILIDADES
        </div>
        
        <h2 className="text-fg text-3xl font-bold mb-6">
            Habilidades que você adquirirá
        </h2>

        <ul className="*:flex *:items-center *:justify-start *:gap-2 flex flex-col justify-start items-start gap-2">
            <li className="flex justify-start items-center gap-2">
                <span className="text-accent-1-500"><CheckCheck /></span>
                Robótica Educacional
            </li>
            <li>
                <span className="text-accent-1-500"><CheckCheck /></span>
                Hardware Básico
            </li>
            <li>
                <span className="text-accent-1-500"><CheckCheck /></span>
               <span> Noções Básicas de Lógica de Programação </span>
            </li>
        </ul>

    </section>
    )
}