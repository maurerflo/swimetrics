import {Metadata} from "next";
import {DashboardOverview} from "@/components/dashboard/dashboard-overview";

export const metadata: Metadata = {
    title: 'Tender Ninja | Home',
    description: 'A comprehensive system for managing tenders'
}

export default function Home() {
    return <DashboardOverview/>
}