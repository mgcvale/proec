import { useTheme } from "@/app/ThemeProvider"
import Button from "./Button";

export default function DesktopHeader() {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <header className="sticky top-0 left-0 w-full h-20
                        flex justify-between items-center 
                        bg-bg border-b-1 border-surface-border
                        px-4 
                         ">
            <div className="logo flex justify-start items-center gap-2">
                <img class="h-12" src={theme == 'dark' ? "unicamp-dark.png" : "unicamp-light.png"} alt="Logo unicamp"></img>
                <span class="text-lg">PROEC</span>
            </div>
            <nav class="flex justify-end items-center gap-2 ">
                <Button outlined={false} filled={false}>
                    Início
                </Button>

                <Button outlined={false} filled={false}>
                    Explorar curso
                </Button>

                <Button outlined={false} filled={false}>
                    Portal
                </Button>

                <Button outlined={true} filled={true} variant={"background"} className="py-4 px-4 font-medium text-lg">
                    Minha Conta
                </Button>
            </nav>
        </header>
    )
}