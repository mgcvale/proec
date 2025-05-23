import { useTheme } from "@/core/context/ThemeProvider"
import Link from "next/link";
import { ThemeContextType, UserContextType } from "@/types";
import { useUser } from "@/core/context/UserProvider";
import ThemeSwitcher from "./ThemeSwitcher";

export default function ReducedHeader() {
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
                <ThemeSwitcher className="mx-2" />
            </nav>
        </header>
    )
}