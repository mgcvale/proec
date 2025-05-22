import { useTheme } from "@/core/context/ThemeProvider"
import Button from "./Button";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import { ThemeContextType, UserContextType } from "@/types";
import { useUser } from "@/core/context/UserProvider";

export default function DesktopHeader() {
    const { theme }: ThemeContextType = useTheme();
    const { user }: UserContextType = useUser();
    
    return (
        <header className="sticky top-0 left-0 w-full h-18
                        flex justify-between items-center 
                        bg-bg border-b-1 border-surface-border
                        p-3 z-10
        ">
            <div className="logo flex justify-start items-center gap-2">
                <Link href="/">
                    <img className="h-9 w-auto" src={theme == 'dark' ? "/unicamp-dark.png" : "/unicamp-light.png"} alt="Logo unicamp"></img>
                </Link>
                <Link href="/" className="text-lg font-medium">PROEC</Link>
            </div>
            <nav className="flex justify-end items-center gap-2">
                <Link href="/">
                    <Button outlined={false} filled={false}>
                        Início
                    </Button>
                </Link>

                <Link href="/courses">
                    <Button outlined={false} filled={false}>
                        Explorar curso
                    </Button>
                </Link>

                <Link href="/about">
                    <Button outlined={false} filled={false}>
                        Sobre
                    </Button>
                </Link>

                <ThemeSwitcher className="mx-2" />

                <Link href={user === null ? `/signup` : user.userClass === "teacher" ? '/teacher/dashboard' : '/school/dashboard' }>
                    <Button outlined={true} filled={true} variant={"background"} className="py-3 px-4 font-medium text-lg">
                        {user === null ? "Crie uma conta" : "Acesse sua Conta"}
                    </Button>
                </Link>
            </nav>
        </header>
    )
}