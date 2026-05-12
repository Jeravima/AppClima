
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

interface Props{
  onSearch: (city:string)=>void
}


export const Navbar = ({onSearch}:Props) => {
const [city, setCity] = useState('')


const submit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCity('')
    onSearch(city)
};

  return (
    
    <nav className="w-full  px-6 py-4 ">
      <form action="" onSubmit={submit} className="flex items-center">
        <input
          type="text"
          placeholder="Buscar ciudad..."
          value={city}
          className="rounded-2xl pl-8 p-2 shadow-md focus:border-gray-400 focus:outline focus:outline-sky-500 relative w-120"
          onChange={(e)=>setCity(e.target.value)}
        />
        <button className=" absolute pl-1 "> <CiSearch size={25}/></button>
      </form>
    </nav>
  );
}
