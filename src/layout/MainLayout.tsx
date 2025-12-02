import { Sidebar } from "@/modules/calculator";
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
