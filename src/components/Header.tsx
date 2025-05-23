"use client";
import { useState, useEffect } from "react";
import DesktopHeader from "./Desktopheader";
import MobileHeader from "./MobileHeader";
import ReducedHeader from "./DashboardHeader";

export default function Header({ reducedHeader = false }: { reducedHeader?: boolean }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    if (typeof window === 'undefined') {
        return <DesktopHeader />; // Default to desktop on server render
    }
    
    if (reducedHeader) {
        return <ReducedHeader />
    }

    return isMobile ? <MobileHeader /> : <DesktopHeader />;
}