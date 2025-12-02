import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex h-full min-h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
