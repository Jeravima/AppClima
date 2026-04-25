import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";



interface Props{
  inputValue:string
  onChange: (value:string)=> void
}

export const Search = ({inputValue, onChange}:Props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
    setValue("");
  };
  return (
    <div >
      <form action="" className="flex gap-4" onSubmit={handleSubmit}>
        <Input
          placeholder="Ingresa el nombre de tu ciudad"
          type="text"
          value={inputValue}
          onChange={(e) => onChange(e.target.value) }
          className="capitalize placeholder:normal-case p-1 w-lg"
        />
        <Button type="submit">Buscar</Button>
      </form>
    </div>
  );
};
