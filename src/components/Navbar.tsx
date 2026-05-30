import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useTheme } from "@/context/theme-provider";
import {Sun,Moon} from 'lucide-react'

interface Props {
  onSearch: (city: string) => void;
}

export const Navbar = ({ onSearch }: Props) => {
  const [city, setCity] = useState("");

  const {theme,setTheme}= useTheme()
  const isDark = theme === 'dark'

  const submit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity("");
    onSearch(city);
  };

  return (
    <nav className="w-full px-4 md:px-6 py-4 shadow-xs">
      <div className="flex justify-between items-center">
        <form
          onSubmit={submit}
          className="flex items-center relative max-w-md md:max-w-xl lg:max-w-2xl"
        >
          <input
            type="text"
            placeholder="Buscar ciudad..."
            value={city}
            className="w-full rounded-2xl pl-10 pr-4 py-2 md:py-3  focus:border-gray-400 focus:outline focus:outline-sky-500 capitalize text-sm md:text-base"
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            className="absolute left-3 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <CiSearch size={25} />
          </button>
        </form>
        <div
          className="mr-4 cursor-pointer"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {isDark ? (
            <Sun className="h-6 w-6 text-yellow-400 transition-all" />
          ) : (
            <Moon className="h-6 w-6 text-gray-400 transition-all" />
          )}
        </div>
      </div>
    </nav>
  );
};
