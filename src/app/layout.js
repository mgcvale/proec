import { Geist, Geist_Mono, Onest } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"]
});

export const metadata = {
  title: "PROEC - Plataforma de Recursos e Orientação para Educação Continuada",
  description: "Acesse cursos, workshops e recursos educacionais para desenvolvimento profissional e acadêmico contínuo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}, ${onest.variable} font-onest antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}