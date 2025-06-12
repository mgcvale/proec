"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface TokenFormState {
  token: string;
}

interface ProfileFormState {
  firstName: string;
  lastName: string;
  email: string;
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

interface SchoolInfo {
  name: string;
  location: string;
}

export default function TeacherSignup(): ReactNode {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [tokenFormState, setTokenFormState] = useState<TokenFormState>({
    token: ""
  });
  
  const [profileFormState, setProfileFormState] = useState<ProfileFormState>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [schoolInfo, setSchoolInfo] = useState<SchoolInfo | null>(null);
  
  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setTokenFormState(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };
  
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setProfileFormState(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };
  
  const validateToken = (): FormErrors => {
    const errors: FormErrors = {};
    
    if (!tokenFormState.token.trim()) {
      errors.token = "Token da escola é obrigatório";
    } else if (tokenFormState.token.length < 8) {
      errors.token = "Token inválido";
    }
    
    return errors;
  };
  
  const validateProfile = (): FormErrors => {
    const errors: FormErrors = {};
    
    if (!profileFormState.firstName.trim()) {
      errors.firstName = "Nome é obrigatório";
    }
    
    if (!profileFormState.lastName.trim()) {
      errors.lastName = "Sobrenome é obrigatório";
    }
    
    if (!profileFormState.email.trim()) {
      errors.email = "E-mail é obrigatório";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(profileFormState.email)) {
        errors.email = "E-mail inválido";
      }
    }
    
    if (!profileFormState.password) {
      errors.password = "Senha é obrigatória";
    } else if (profileFormState.password.length < 8) {
      errors.password = "A senha deve ter pelo menos 8 caracteres";
    }
    
    if (profileFormState.password !== profileFormState.confirmPassword) {
      errors.confirmPassword = "As senhas não coincidem";
    }
    
    if (!profileFormState.agreeTerms) {
      errors.agreeTerms = "Você deve concordar com os termos";
    }
    
    return errors;
  };
  
  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    const errors = validateToken();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Simulate token validation
    setTimeout(() => {
      // Mock school data based on token
      const mockSchoolData: SchoolInfo = {
        name: "EMEI Hilda Maria C. Hafliger",
        location: "Limeira, SP"
      };
      
      setSchoolInfo(mockSchoolData);
      setCurrentStep(2);
      setFormStatus({
        type: "success",
        message: `Token válido! Vinculado à escola: ${mockSchoolData.name}`
      });
    }, 1000);
  };
  
  const handleProfileSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    const errors = validateProfile();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Simulate teacher registration
    setTimeout(() => {
      setFormStatus({
        type: "success",
        message: "Conta de professor criada com sucesso! Redirecionando para a página de login..."
      });
      
      // Reset forms
      setTokenFormState({ token: "" });
      setProfileFormState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false
      });
      
      // Redirect using Next.js router
      setTimeout(() => {
        router.push("/teacher/login");
      }, 2000);
    }, 1000);
  };
  
  const handleBackToStep1 = (): void => {
    setCurrentStep(1);
    setSchoolInfo(null);
    setFormStatus(null);
    setFormErrors({});
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <Link
              href="/signup"
              className="text-accent-1-500 hover:underline text-sm mb-4 flex items-center"
            >
              ← Voltar para seleção
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-2 text-fg">Cadastrar Professor</h1>
          <p className="text-fg-muted mb-8">
            {currentStep === 1 
              ? "Digite o token fornecido pela sua escola para começar."
              : "Complete seu perfil para finalizar o cadastro."
            }
          </p>
          
          {formStatus && (
            <div className={`p-4 mb-6 rounded-lg ${formStatus.type === "success" ? "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400" : "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400"}`}>
              {formStatus.message}
            </div>
          )}
          
          {currentStep === 1 ? (
            <form onSubmit={handleTokenSubmit} className="bg-surface border border-surface-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-fg">Validar Token da Escola</h2>
              
              <div className="mb-6">
                <label htmlFor="token" className="block mb-1 text-sm font-medium">
                  Token da Escola *
                </label>
                <input
                  type="text"
                  id="token"
                  name="token"
                  value={tokenFormState.token}
                  onChange={handleTokenChange}
                  placeholder="Digite o token fornecido pela escola"
                  className={`w-full p-3 bg-bg border ${formErrors.token ? "border-red-500" : "border-surface-border"} rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500`}
                />
                {formErrors.token && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.token}</p>
                )}
                <p className="mt-1 text-sm text-fg-muted">
                  O token deve ser fornecido pelo administrador da sua escola
                </p>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent-1-500 text-white rounded-lg hover:bg-accent-1-700 transition-colors"
              >
                Validar Token
              </button>
              
              <div className="mt-4 text-center text-sm">
                <p className="text-fg-muted">
                  Já tem uma conta? <Link href="/teacher/login" className="text-accent-1-500 hover:underline">Entrar como Professor</Link>
                </p>
                <p className="text-fg-muted mt-2">
                  É uma escola? <Link href="/school/signup" className="text-accent-1-500 hover:underline">Cadastrar Escola</Link>
                </p>
              </div>
            </form>
          ) : (
            <form onSubmit={handleProfileSubmit} className="bg-surface border border-surface-border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-fg">Complete seu Perfil</h2>
                <button
                  type="button"
                  onClick={handleBackToStep1}
                  className="text-accent-1-500 hover:underline text-sm"
                >
                  ← Alterar token
                </button>
              </div>
              
              {schoolInfo && (
                <div className="mb-6 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-400">
                    <strong>Escola:</strong> {schoolInfo.name}<br />
                    <strong>Localização:</strong> {schoolInfo.location}
                  </p>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block mb-1 text-sm font-medium">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={profileFormState.firstName}
                    onChange={handleProfileChange}
                    placeholder="Seu nome"
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
                    value={profileFormState.lastName}
                    onChange={handleProfileChange}
                    placeholder="Seu sobrenome"
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
                  value={profileFormState.email}
                  onChange={handleProfileChange}
                  placeholder="seu@email.com"
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
                  value={profileFormState.password}
                  onChange={handleProfileChange}
                  placeholder="Mínimo 8 caracteres"
                  className={`w-full p-3 bg-bg border ${formErrors.password ? "border-red-500" : "border-surface-border"} rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500`}
                />
                {formErrors.password && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.password}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium">
                  Confirmar Senha *
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={profileFormState.confirmPassword}
                  onChange={handleProfileChange}
                  placeholder="Digite a senha novamente"
                  className={`w-full p-3 bg-bg border ${formErrors.confirmPassword ? "border-red-500" : "border-surface-border"} rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500`}
                />
                {formErrors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.confirmPassword}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={profileFormState.agreeTerms}
                    onChange={handleProfileChange}
                    className="mt-1 w-4 h-4 text-accent-1-500 border-surface-border rounded focus:ring-accent-1-500"
                  />
                  <span className="text-sm text-fg-muted">
                    Eu concordo com os <Link href="/terms" className="text-accent-1-500 hover:underline">Termos de Uso</Link> e a <Link href="/privacy" className="text-accent-1-500 hover:underline">Política de Privacidade</Link> *
                  </span>
                </label>
                {formErrors.agreeTerms && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.agreeTerms}</p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent-1-500 text-white rounded-lg hover:bg-accent-1-700 transition-colors"
              >
                Criar Conta de Professor
              </button>
              
              <div className="mt-4 text-center text-sm">
                <p className="text-fg-muted">
                  Já tem uma conta? <Link href="/teacher/login" className="text-accent-1-500 hover:underline">Entrar como Professor</Link>
                </p>
              </div>
            </form>
          )}

          {/* Progress indicator */}
          <div className="flex items-center mt-8">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${currentStep >= 1 ? 'bg-accent-1-500 text-white' : 'bg-surface-border text-fg-muted'}`}>
              1
            </div>
            <div className={`flex-1 h-1 mx-2 ${currentStep >= 2 ? 'bg-accent-1-500' : 'bg-surface-border'}`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${currentStep >= 2 ? 'bg-accent-1-500 text-white' : 'bg-surface-border text-fg-muted'}`}>
              2
            </div>
          </div>
        </div>
        
      </section>
      <Footer />
    </main>
  );
}