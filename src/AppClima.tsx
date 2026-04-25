import { useState } from "react";
import { Search } from "./components/Search";

export const AppClima = () => {

  const [inputValue, setInputValue] = useState('')
  return (
    <div className="flex w-full h-full m-4 ">
      <div className="bg-white shadow-xl min-w-4/5 mx-auto  min-h-96 m-4">
          <h1 className="text-2xl font-bold text-black justify-center flex mb-5">App Clima </h1>
        <div className="justify-center flex">
          <Search inputValue={inputValue} onChange={setInputValue} />
        </div>
        <h2>{inputValue}</h2>
      </div>
    </div>
  );
};
