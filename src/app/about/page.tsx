"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-fg">Sobre o PROEEC</h1>
          <div className="prose prose-lg dark:prose-invert">
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}