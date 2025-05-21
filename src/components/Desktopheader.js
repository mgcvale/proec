import { useTheme } from "@/app/ThemeProvider"
import Button from "./Button";

export default function DesktopHeader() {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <header className="sticky top-0 left-0 w-full h-18
                        flex justify-between items-center 
                        bg-bg border-b-1 border-surface-border
                        p-3
        ">
            <div className="logo flex justify-start items-center gap-2">
                <img className="h-9 w-auto" src={theme == 'dark' ? "unicamp-dark.png" : "unicamp-light.png"} alt="Logo unicamp"></img>
                <span className="text-lg">PROEC</span>
            </div>
            <nav className="flex justify-end items-center gap-2 ">
                <Button outlined={false} filled={false}>
                    Início
                </Button>

                <Button outlined={false} filled={false}>
                    Explorar curso
                </Button>

                <Button outlined={false} filled={false}>
                    Portal
                </Button>

                <Button outlined={true} filled={true} variant={"background"} className="py-3 px-4 font-medium text-lg">
                    Minha Conta
                </Button>
            </nav>
        </header>
    )
}