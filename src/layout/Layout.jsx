import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex h-screen bg-background">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Topbar />
                <main className="flex-1 p-4 overflow-y-auto mt-20 min-h-[calc(100vh-80px)]">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
