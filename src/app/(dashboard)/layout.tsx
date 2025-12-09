import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 min-h-screen flex flex-col bg-beige-100 py-400 px-500">{children}</div>
        </div>
    );
}
