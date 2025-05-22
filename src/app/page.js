"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import CourseInfo from "@/components/CourseInfo";
import { useTheme } from "./ThemeProvider";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-1 container mx-auto px-4 py-12 sm:py-24 overflow-hidden">
      <div 
        className="absolute inset-0 left-0 top-0 w-dvw h-[80dvh] -z-10" 
        style={{
          background: "transparent",
          backgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='100dvw' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='80' height='40' patternTransform='scale(7) rotate(145)'><rect x='0' y='0' width='100%' height='100%' fill='transparent'/><path d='M-20.133 4.568C-13.178 4.932-6.452 7.376 0 10c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432'  stroke-width='0.5' stroke='${theme === 'dark' ?  '%23222222' : '%23dddddd'}' fill='none'/><path d='M-20.133 24.568C-13.178 24.932-6.452 27.376 0 30c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432'  stroke-width='0.7' stroke='${theme === 'dark' ? '%23383838' : '%23eeeeee'}' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitMaskImage: "linear-gradient(to bottom, black 10%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 10%, transparent 100%)",
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",
        }}
      ></div>

        <div className="max-w-4xl mx-auto flex items-center justify-start flex-col gap-2 mb-28 md:mb-16">
          <div className="badge text-center border-1 rounded-full border-surface-border w-fit flex justify-start items-center py-1 px-3 text-fg-muted backdrop-blur-xs tracking-wider gap-2 mb-8">
            <img className="h-4 w-auto" src={theme == 'dark' ? "/unicamp-dark.png" : "/unicamp-light.png"} alt="Logo unicamp"></img>
            PROEC
          </div>
          <h1 className="lg:text-6xl text-center md:text-5xl text-3xl font-semibold mb-6 text-fg">
            Conheça seu novo curso gratuito de robótica
          </h1>
          <h3 className="text-2xl mb-8 text-fg-muted text-center">
            Inscreva-se através de sua instituição de ensino e começe já!
          </h3>
          <Button filled={false} outlined={true} variant={"border"} className="w-4/5 sm:w-3/5 lg:w-fit lg:px-6 bg-transparent px-4 backdrop-blur-xs text-[1.1rem]">
            Inscrever-se
          </Button>
        </div>
        
        {/* Video Placeholder */}
        <div className="max-w-6xl mx-auto mb-32 sm:mb-24 w-full relative">
          <div className="aspect-video bg-surface rounded-lg overflow-hidden border border-surface-border relative group cursor-pointer">
            {/* Video Thumbnail with Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary bg-opacity-90 flex items-center justify-center transition-transform group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                </svg>
              </div>
            </div>
            
            {/* Video Placeholder - Replace with actual thumbnail when available */}
            <div className="w-full h-full bg-gradient-to-br from-surface to-surface-hover flex items-center justify-center">
              <div className="text-primary opacity-30">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Video Caption */}
          <div className="mt-3 text-center">
            <p className="text-fg-muted">Assista a uma introdução ao curso de robótica</p>
          </div>
        </div>
        
        {/* Course Info Section */}
        <CourseInfo />
      </section>
      
      <Footer />
    </main>
  );
}