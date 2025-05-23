"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useUser } from "@/core/context/UserProvider";
import { isSchooluser } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!user || !isSchooluser(user.userData)) {
            router.push("/teacher/login");
            console.log(user, isSchooluser(user?.userData));
        }
    }, [user]);

    if (!user || !isSchooluser(user.userData)) {
        return <p>Loading...</p>;
    }

    return (
        <main className="min-h-screen flex flex-col relative">
            <Header reducedHeader={true} />
            <section className="flex-1 p-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-fg">
                 Dashboard da escola {user.userData.schoolName}
            </h1>
            </section>
            <Footer />
        </main>
    );
}
