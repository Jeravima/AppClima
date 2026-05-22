import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Outlet } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";

export const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  

  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-gray-100">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-500 text-white rounded-lg"
      >
        {sidebarOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
          
        />
      )}

      <div
        className={`
          fixed top-0 left-0 bottom-0 z-40 w-64
          transform transition-transform duration-200 ease-in-out
           md:translate-x-0 md:relative md:block
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar />
      </div>

      
      <div className="flex-1 w-full pt-16 md:pt-0">
        <Outlet />
      </div>
    </div>
  );
};
