"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";

interface SchoolFormState {
  schoolName: string;
  location: string;
  contactEmail: string;
  contactPhone: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}

interface FormStatus {
  type: "success" | "error";
  message: string;
}

interface FormErrors {
  [key: string]: string | null;
}

export default function SchoolSignup(): ReactNode {
    const router = useRouter();

  const [formState, setFormState] = useState<SchoolFormState>({
    schoolName: "",
    location: "",
    contactEmail: "",
    contactPhone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    
    // Clear error when field is modified
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };
  
  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    
    if (!formState.schoolName.trim()) {
      errors.schoolName = "Nome da escola é obrigatório";
    }
    
    if (!formState.location.trim()) {
      errors.location = "Localização é obrigatória";
    }
    
    if (!formState.contactEmail.trim()) {
      errors.contactEmail = "E-mail de contato é obrigatório";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formState.contactEmail)) {
        errors.contactEmail = "E-mail inválido";
      }
    }
    
    if (!formState.contactPhone.trim()) {
      errors.contactPhone = "Telefone de contato é obrigatório";
    }
    
    if (!formState.password) {
      errors.password = "Senha é obrigatória";
    } else if (formState.password.length < 8) {
      errors.password = "A senha deve ter pelo menos 8 caracteres";
    }
    
    if (formState.password !== formState.confirmPassword) {
      errors.confirmPassword = "As senhas não coincidem";
    }
    
    if (!formState.agreeTerms) {
      errors.agreeTerms = "Você deve concordar com os termos";
    }
    
    return errors;
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Simulate school registration
    setTimeout(() => {
      setFormStatus({
        type: "success",
        message: "Escola cadastrada com sucesso! Redirecionando para a página de login..."
      });
      
      // Reset form
      setFormState({
        schoolName: "",
        location: "",
        contactEmail: "",
        contactPhone: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false
      });
      
      // Simulate redirect
      setTimeout(() => {
        router.push("/school/login");
      }, 2000);
    }, 1000);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <button
              onClick={() => router.push("/signup")}
              className="text-accent-1-500 hover:underline text-sm mb-4 flex items-center"
            >
              ← Voltar para seleção
            </button>
          </div>
          
          <h1 className="text-3xl font-bold mb-2 text-fg">Cadastrar Escola</h1>
          <p className="text-fg-muted mb-8">
            Registre sua escola no PROEC e comece a gerenciar professores e cursos.
          </p>
          
          {formStatus && (
            <div className={`p-4 mb-6 rounded-lg ${formStatus.type === "success" ? "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400" : "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400"}`}>
              {formStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="bg-surface border border-surface-border rounded-lg p-6">
            <div className="mb-4">
              <label htmlFor="schoolName" className="block mb-1 text-sm font-medium">
                Nome da Escola *
              </label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={formState.schoolName}
                onChange={handleChange}
                placeholder="Ex: EMEI Hilda Maria C. Hafliger"
                className={`w-full p-3 bg-bg border ${formErrors.schoolName ? "border-red-500" : "border-surface-border"} rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500`}
              />
              {formErrors.schoolName && (
                <p className="mt-1 text-sm text-red-500">{formErrors.schoolName}</p>
              )}
            </div>
            
            <div className="mb-4">
              <label htmlFor="location" className="block mb-1 text-sm font-medium">
                Localização *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formState.location}
                onChange={handleChange}
                placeholder="Ex: Limeira, SP"
                className={`w-full p-3 bg-bg border ${formErrors.location ? "border-red-500" : "border-surface-border"} rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500`}
              />
              {formErrors.location && (
                <p className="mt-1 text-sm text-red-500">{formErrors.location}</p>
              )}
            </div>
            
            <div className="mb-4">
              <label htmlFor="contactEmail" className="block mb-1 text-sm font-medium">
                E-mail de Contato *
              </label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={formState.contactEmail}
                onChange={handleChange}
                placeholder="contato@escola.com.br"
                className={`w-full p-3 bg-bg border ${formErrors.contactEmail ? "border-red-500" : "border-surface-border"} rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500`}
              />
              {formErrors.contactEmail && (
                <p className="mt-1 text-sm text-red-500">{formErrors.contactEmail}</p>
              )}
            </div>
            
            <div className="mb-4">
              <label htmlFor="contactPhone" className="block mb-1 text-sm font-medium">
                Telefone de Contato *
              </label>
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                value={formState.contactPhone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                className={`w-full p-3 bg-bg border ${formErrors.contactPhone ? "border-red-500" : "border-surface-border"} rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500`}
              />
              {formErrors.contactPhone && (
                <p className="mt-1 text-sm text-red-500">{formErrors.contactPhone}</p>
              )}
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1 text-sm font-medium">
                Senha *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
                className={`w-full p-3 bg-bg border ${formErrors.password ? "border-red-500" : "border-surface-border"} rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500`}
              />
              {formErrors.password && (
                <p className="mt-1 text-sm text-red-500">{formErrors.password}</p>
              )}
              <p className="mt-1 text-sm text-fg-muted">
                A senha deve ter pelo menos 8 caracteres
              </p>
            </div>
            
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium">
                Confirmar Senha *
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formState.confirmPassword}
                onChange={handleChange}
                className={`w-full p-3 bg-bg border ${formErrors.confirmPassword ? "border-red-500" : "border-surface-border"} rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500`}
              />
              {formErrors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">{formErrors.confirmPassword}</p>
              )}
            </div>
            
            <div className="mb-6">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeTerms"
                    name="agreeTerms"
                    type="checkbox"
                    checked={formState.agreeTerms}
                    onChange={handleChange}
                    className="w-4 h-4 border border-surface-border rounded bg-bg focus:ring-2 focus:ring-accent-1-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeTerms" className="font-medium text-fg">
                    Concordo com os <a href="/terms" className="text-accent-1-500 hover:underline">Termos de Serviço</a> e <a href="/privacy" className="text-accent-1-500 hover:underline">Política de Privacidade</a> *
                  </label>
                  {formErrors.agreeTerms && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.agreeTerms}</p>
                  )}
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent-1-500 text-white rounded-lg hover:bg-accent-1-700 transition-colors"
            >
              Cadastrar Escola
            </button>
            
            <div className="mt-4 text-center text-sm">
              <p className="text-fg-muted">
                Já tem uma conta? <a href="/school/login" className="text-accent-1-500 hover:underline">Entrar como Escola</a>
              </p>
              <p className="text-fg-muted mt-2">
                É professor? <a href="/teacher/signup" className="text-accent-1-500 hover:underline">Cadastrar como Professor</a>
              </p>
            </div>
          </form>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}