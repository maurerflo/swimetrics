import {auth} from "@/lib/auth/auth";
import {redirect} from 'next/navigation';
import {SideNav} from "@/components/dashboard/side-nav";
import {Header} from "@/components/dashboard/header";

export const metadata = {
    title: 'Meondi Tender Ninja - Dashboard',
    description: 'A comprehensive system for managing tenders',
};

export default async function DashboardLayout({children}: {
    children: React.ReactNode;
}) {

    const session = await auth()
    if (!session) {
        redirect("/auth/signin");
    }

    return (
        <div className="flex min-h-screen">
            <SideNav/>
            <div className="flex-1 pl-64">
                <Header/>
                <main className="container mx-auto p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
