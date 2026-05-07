import { FaCloudSun, FaCloudSunRain, FaHome, FaLocationArrow} from 'react-icons/fa'
import { IoMdSettings } from "react-icons/io";

import { Link } from 'react-router';



export const Sidebar = () => {
  return (
    <aside className="hidden md:flex md:w-64 flex-col bg-gray-500 rounded-3xl m-4 p-6  shadow-xl ">
      <div className="flex flex-col items-center gap-2 pb-8 border-b border-white">
        <div className="relative h-14 w-14 grid place-items-center rounded-2xl bg-white">
          {" "}
          <FaCloudSun size={40} />
        </div>
        <h1 className="text-2xl text-white mt-4 font-bold tracking-[0.3em] ">
          CLIMA
        </h1>
      </div>
      <div className="flex flex-col gap-10 mt-10 w-full ">
        <Link
          to="/"
          className="flex items-center gap-3 hover:bg-white/30 rounded p-2"
        >
          <FaHome size={30} /> <span>Home</span>
        </Link>
        <Link
          to="/forecast"
          className="flex items-center gap-3 hover:bg-white/30 rounded p-2"
        >
          <FaCloudSunRain size={30} /> <span>Forecast</span>
        </Link>
        <Link
          to="/locations"
          className="flex items-center gap-3 hover:bg-white/30 rounded p-2"
        >
          <FaLocationArrow size={25} /> <span>Locations</span>
        </Link>
        <Link
          to="/settings"
          className="flex items-center gap-3 hover:bg-white/30 rounded p-2"
        >
          <IoMdSettings size={30} /> <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
};
