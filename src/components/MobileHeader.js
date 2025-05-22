import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from "@/app/ThemeProvider";
import ThemeSwitcher from "./ThemeSwitcher";
import Button from "./Button";

/**
 * Mobile header component with hamburger menu
 * @returns {JSX.Element} Mobile header with responsive menu
 */
const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 left-0 w-full
                    flex flex-col
                    bg-bg border-b-1 border-surface-border
                    z-10">
      <div className="flex justify-between items-center p-3">
        {/* Logo */}
        <div className="logo flex justify-start items-center gap-2">
          <Link href="/">
            <img className="h-9 w-auto" src={theme == 'dark' ? "/unicamp-dark.png" : "/unicamp-light.png"} alt="Logo unicamp"></img>
          </Link>
          <Link href="/" className="text-lg font-medium">PROEC</Link>
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          
          <button 
            onClick={toggleMenu}
            className="flex flex-col justify-between py-2 w-6 h-8 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`w-full h-0.5 bg-fg transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-full h-0.5 bg-fg transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-full h-0.5 bg-fg transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[0.5rem]' : ''}`}></span>
          </button>

        </div>
      </div>

      {/* Mobile Menu - Using fixed positioning instead of overflow for better compatibility */}
        <nav className={`w-[50dvw] -right-full transition-all duration-300 ${isMenuOpen ? 'right-0' : ''}  h-dvh bg-bg border-l-1 border-surface-border fixed top-15`}>
          <div className="flex flex-col px-4 py-2">
            <Link href="/" className="py-3 border-b border-surface-border">
              <span className="block w-full text-text hover:text-primary">Início</span>
            </Link>

            <Link href="/courses" className="py-3 border-b border-surface-border">
              <span className="block w-full text-text hover:text-primary">Explorar curso</span>
            </Link>

            <Link href="/about" className="py-3 border-b border-surface-border">
              <span className="block w-full text-text hover:text-primary">Sobre</span>
            </Link>

            <div className="py-3">
              <Link href="/signup" className="block w-full">
                <Button outlined={true} filled={true} variant={"background"} className="w-full py-3 px-4 font-medium text-lg justify-center">
                  Minha Conta
                </Button>
              </Link>
            </div>
          </div>
        </nav>

    </header>
  );
};

export default MobileHeader;