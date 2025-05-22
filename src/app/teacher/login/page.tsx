"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FormEvent, ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type FormState = {
  email: string;
  password: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

type FormStatus = {
  type: "success" | "error";
  message: string;
} | null;

export default function UserLogin() {
    const router = useRouter();

  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>(null);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (formErrors[name as keyof FormState]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};

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
    }

    return errors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setTimeout(() => {
      setFormStatus({
        type: "success",
        message: "Login realizado com sucesso! Redirecionando para sua dashboard...",
      });

      setFormState({
        email: "",
        password: "",
      });

      setTimeout(() => {
        router.push("/school/dashboard");
      }, 1000);
    }, 1000);
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
          <h1 className="text-3xl font-bold mb-2 text-fg">Faça Login</h1>
          <p className="text-fg-muted mb-8">
            Faça login com sua conta de professor para ter acesso aos seus cursos e materiais.
          </p>

          {formStatus && (
            <div
              className={`p-4 mb-6 rounded-lg ${
                formStatus.type === "success"
                  ? "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400"
                  : "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400"
              }`}
            >
              {formStatus.message}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-surface border border-surface-border rounded-lg p-6"
          >

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
                className={`w-full p-3 bg-bg border ${
                  formErrors.email ? "border-red-500" : "border-surface-border"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500`}
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
                className={`w-full p-3 bg-bg border ${
                  formErrors.password ? "border-red-500" : "border-surface-border"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1-500`}
              />
              {formErrors.password && (
                <p className="mt-1 text-sm text-red-500">{formErrors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent-1-500 text-white rounded-lg hover:bg-accent-1-700 transition-colors"
            >
                Fazer login
            </button>

            <div className="mt-4 text-center text-sm">
              <p className="text-fg-muted">
                Não tem uma conta? 
                <Link href="/school/signup" className="text-accent-1-500 hover:underline pl-1">
                   Crie aqui
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
