import { useTheme } from "@/core/context/ThemeProvider"
import Link from "next/link";
import { isSchooluser, isTeacherUser, ThemeContextType, UserContextType } from "@/types";
import { useUser } from "@/core/context/UserProvider";
import ThemeSwitcher from "./ThemeSwitcher";
import { MouseEvent, useState, useRef, useEffect } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import Button from "./Button";

export default function DashboardHeader() {
    const { theme }: ThemeContextType = useTheme();
    const { user, setUser }: UserContextType = useUser();
    const router: AppRouterInstance = useRouter();
    const [drawerVisible, setDrawerVisible] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const drawerRef = useRef<HTMLDivElement>(null);

    const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setDrawerVisible(!drawerVisible);
    };

    const handleClickOutside = (event: Event) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target as Node) &&
            buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
            setDrawerVisible(false);
        }
    };

    useEffect(() => {
        if (drawerVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
 
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [drawerVisible]);

    const handleAccountClick = () => {
        setDrawerVisible(false);
        if (!user) {
            router.push("/login");
        } else if (isTeacherUser(user.userData)) {
            router.push("/teacher/dashboard/profile");
        } else if (isSchooluser(user.userData)) {
            router.push("/school/dashboard/profile");
        } else {
            setUser(null);
            router.push("/login");
        }
    };

    const handleLogoutClick = () => {
        setDrawerVisible(false);
        setUser(null);
        router.push("/");
    };
    
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
            <nav className="flex justify-end items-center gap-2 relative">
                <ThemeSwitcher className="mx-2" />
                {user && (
                    <div className="relative">
                        <Button 
                            filled={true} 
                            outlined={false} 
                            variant={"background"} 
                            onClick={handleButtonClick} 
                            className="w-full py-3 px-4 font-medium text-lg justify-center"
                        >
                            Sua conta
                        </Button>
                        
                        {drawerVisible && (
                            <div 
                                ref={drawerRef}
                                className="absolute top-full right-0 mt-2 min-w-32
                                         bg-bg border-1 border-surface-border rounded-xl shadow-lg
                                         animate-in slide-in-from-top-2 duration-200 z-20"
                            >
                                <div className="p-2">
                                    <button
                                        onClick={handleAccountClick}
                                        className="w-full text-left px-3 py-3 rounded-md hover:bg-surface-hover cursor-pointer
                                                transition-all duration-300 text-base font-medium text-nowrap inline-block pr-6
                                                -translate-x-1 hover:translate-x-0 active:scale-[0.97]"
                                    >
                                        Sua Conta
                                    </button>
                                    <button
                                        onClick={handleLogoutClick}
                                        className="w-full text-left px-3 py-3 hover:bg-surface-hover rounded-md cursor-pointer
                                                transition-all duration-300 text-base font-medium text-nowrap inline-block pr-6
                                                -translate-x-1 hover:translate-x-0 active:scale-[0.97]"
                                    >
                                        Sair
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </nav>
        </header>
    )
}