import { Sidebar } from "@/components/Sidebar"
import { Outlet } from "react-router"



export const Layout = () => {
  return (
    <div className="flex min-h-screen m-4 ">
      <Sidebar />

      <div className="flex-1 bg-gray-100">
        <Outlet />
      </div>

      
    </div>
  );
}
