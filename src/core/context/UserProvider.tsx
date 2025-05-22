"use client";
import { User, UserContextType } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

export const UserContext = createContext<UserContextType | null>(null);

export function useUser(): UserContextType {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser must be used within a UserProvider");
    return context;
}

export default function UserProvider({ children }: { children: ReactNode })  {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

