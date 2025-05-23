"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useUser } from "@/core/context/UserProvider";
import { isTeacherUser } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!user || !isTeacherUser(user.userData)) {
            router.push("/teacher/login");
        }
    }, [user]);

    if (!user || !isTeacherUser(user.userData)) {
        return <p>Loading...</p>;
    }

    return (
        <main className="min-h-screen flex flex-col relative">
            <Header reducedHeader={true} />
            <section className="flex-1 p-4">
                <h1 className="text-4xl font-bold mb-6 text-fg">
                    Bem-vindo, {user.userData.username}
                </h1>
            </section>
            <Footer />
        </main>
    );
}
