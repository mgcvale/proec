import { useState, useEffect } from "react";
import DesktopHeader from "./Desktopheader";
import MobileHeader from "./MobileHeader";

export default function Header() {
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

    return isMobile ? <MobileHeader /> : <DesktopHeader />;
}