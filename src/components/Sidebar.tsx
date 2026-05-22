import {
  FaCloudSun,
  FaHome,
  FaLocationArrow,
  FaChartArea,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

import { Link, useLocation } from "react-router";

export const Sidebar = () => {
  const { pathname } = useLocation();


  return (
    <aside className="w-64 h-full flex flex-col bg-linear-to-r from-cyan-500 to-blue-500 p-4 md:p-6 shadow-xl">
      <div className="flex flex-col items-center gap-2 pb-6 md:pb-8 border-b border-white">
        <div className="relative h-12 md:h-14 w-12 md:w-14 grid place-items-center rounded-2xl bg-white">
          {" "}
          <FaCloudSun size={32} />
        </div>
        <h1 className="text-xl md:text-2xl text-white mt-2 md:mt-4 font-bold tracking-[0.3em]">
          CLIMA
        </h1>
      </div>
      <div className="flex flex-col gap-6 md:gap-10 mt-6 md:mt-10 w-full">
        <Link
          to="/"
          className={`${pathname === "/" ? "bg-white/30 backdrop-blur-lg text-black " : ""}flex items-center gap-3  rounded-lg p-3 transition-colors duration-200 text-white text-sm md:text-base`}
        >
          <FaHome size={24} />
          <span className="font-medium">Home</span>
        </Link>
        <Link
          to="/data"
          className={`${pathname === "/forecast" ? "bg-white/30 backdrop-blur-lg text-black " : ""}flex items-center gap-3  rounded-lg p-3 transition-colors duration-200 text-white text-sm md:text-base`}
        >
          <FaChartArea size={24}/>
          <span className="font-medium">Data</span>
        </Link>
        <Link
          to="/locations"
          className={`${pathname === "/locations" ? "bg-white/30 backdrop-blur-lg text-black " : ""}flex items-center gap-3  rounded-lg p-3 transition-colors duration-200 text-white text-sm md:text-base`}
        >
          <FaLocationArrow size={20} />
          <span className="font-medium">Locations</span>
        </Link>
        <Link
          to="/settings"
          className={`${pathname === "/settings" ? "bg-white/30 backdrop-blur-lg text-black " : ""}flex items-center gap-3  rounded-lg p-3 transition-colors duration-200 text-white text-sm md:text-base`}
        >
          <IoMdSettings size={24} />
          <span className="font-medium">Settings</span>
        </Link>
      </div>
    </aside>
  );
};
