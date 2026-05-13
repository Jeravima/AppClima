import { useState } from "react";
import { CiSearch } from "react-icons/ci";

interface Props {
  onSearch: (city: string) => void;
}

export const Navbar = ({ onSearch }: Props) => {
  const [city, setCity] = useState("");

  const submit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity("");
    onSearch(city);
  };

  return (
    <nav className="w-full px-4 md:px-6 py-4">
      <form
        onSubmit={submit}
        className="flex items-center relative max-w-md md:max-w-xl lg:max-w-2xl"
      >
        <input
          type="text"
          placeholder="Buscar ciudad..."
          value={city}
          className="w-full rounded-2xl pl-10 pr-4 py-2 md:py-3 shadow-md focus:border-gray-400 focus:outline focus:outline-sky-500 capitalize text-sm md:text-base"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="absolute left-3 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <CiSearch size={25} />
        </button>
      </form>
    </nav>
  );
};
