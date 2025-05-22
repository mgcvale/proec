import { Geist, Geist_Mono, Onest } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./ThemeProvider";
import { ReactNode } from "react";

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
  title: "PROEC",
  description: "Cursos para a formação de educadores na área de robótica educacional",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}, ${onest.variable} font-onest antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}