"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "success" | "error";
  message: string;
}

export default function Contact() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState<FormStatus | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus({
        type: "error",
        message: "Por favor, preencha todos os campos obrigatórios."
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setFormStatus({
        type: "error",
        message: "Por favor, informe um endereço de e-mail válido."
      });
      return;
    }

    setTimeout(() => {
      setFormStatus({
        type: "success",
        message: "Mensagem enviada com sucesso! Entraremos em contato em breve."
      });

      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      setTimeout(() => setFormStatus(null), 5000);
    }, 1000);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-fg">Entre em Contato</h1>
          <p className="text-lg mb-8 text-fg-muted">
            Estamos aqui para ajudar. Preencha o formulário abaixo e entraremos em contato o mais breve possível.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Informações de Contato</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mt-1 mr-3 text-accent-1-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <div>
                    <h3 className="font-medium">Endereço</h3>
                    <p className="text-fg-muted">Rua Paschoal Marmo, 1888<br />Limeira, SP - 13484-332</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mt-1 mr-3 text-accent-1-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <div>
                    <h3 className="font-medium">E-mail</h3>
                    <p className="text-fg-muted">cl203001@g.unicamp.br</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Envie uma Mensagem</h2>

              {formStatus && (
                <div className={`p-4 mb-4 rounded-lg ${
                  formStatus.type === "success"
                    ? "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400"
                    : "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400"
                }`}>
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-fg">Nome *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-surface border border-surface-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 text-fg">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-surface border border-surface-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-1 text-fg">Assunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full p-3 bg-surface border border-surface-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1 text-fg">Mensagem *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full p-3 bg-surface border border-surface-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-accent-1-500 text-white rounded-lg hover:bg-accent-1-700 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
