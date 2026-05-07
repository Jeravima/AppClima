import { Sidebar } from "@/components/Sidebar"
import { Outlet } from "react-router"



export const Layout = () => {
  return (
    <div className="flex m-2 min-h-screen">
        <Sidebar/>
        <Outlet/>
    </div>
  )
}
