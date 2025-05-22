"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Signup() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });
  
  const [formStatus, setFormStatus] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  
  const handleChange = (e) => {
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
  
  const validateForm = () => {
    const errors = {};
    
    if (!formState.firstName.trim()) {
      errors.firstName = "Nome é obrigatório";
    }
    
    if (!formState.lastName.trim()) {
      errors.lastName = "Sobrenome é obrigatório";
    }
    
    if (!formState.email.trim()) {
      errors.email = "E-mail é obrigatório";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formState.email)) {
        errors.email = "E-mail inválido";
      }
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Simulate account creation
    setTimeout(() => {
      setFormStatus({
        type: "success",
        message: "Conta criada com sucesso! Redirecionando para a página de login..."
      });
      
      // Reset form
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false
      });
      
      // Simulate redirect
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }, 1000);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-fg">Criar Conta</h1>
          <p className="text-fg-muted mb-8">
            Junte-se à PROEC e comece sua jornada de aprendizado hoje mesmo.
          </p>
          
          {formStatus && (
            <div className={`p-4 mb-6 rounded-lg ${formStatus.type === "success" ? "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400" : "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400"}`}>
              {formStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="bg-surface border border-surface-border rounded-lg p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block mb-1 text-sm font-medium">
                  Nome *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                  className={`w-full p-3 bg-bg border ${formErrors.firstName ? "border-red-500" : "border-surface-border"} rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500`}
                />
                {formErrors.firstName && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.firstName}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="lastName" className="block mb-1 text-sm font-medium">
                  Sobrenome *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                  className={`w-full p-3 bg-bg border ${formErrors.lastName ? "border-red-500" : "border-surface-border"} rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500`}
                />
                {formErrors.lastName && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.lastName}</p>
                )}
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className={`w-full p-3 bg-bg border ${formErrors.email ? "border-red-500" : "border-surface-border"} rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500`}
              />
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
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
              Criar Conta
            </button>
            
            <div className="mt-4 text-center text-sm">
              <p className="text-fg-muted">
                Já tem uma conta? <a href="/login" className="text-accent-1-500 hover:underline">Entrar</a>
              </p>
            </div>
          </form>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}