import { Sidebar } from "@/modules/shared";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/ui";

export const MainLayout = () => {
  return (
    <div className="flex h-full min-h-screen bg-zinc-100">
      <Toaster richColors position="top-center" />
      <Sidebar />
      <Outlet />
    </div>
  );
};
