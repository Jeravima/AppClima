import { useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Props {
  inputValue: string;
  onChange: (value: string) => void;
  onClick: () => void;
}

export const Search = ({ inputValue, onChange, onClick }: Props) => {

  const inputRef = useRef<HTMLInputElement>(null)


  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  

  return (
    <div className="w-full">
      <form
        action=""
        className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 w-full"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Ejemplo New York, Dubai..."
          type="text"
          value={inputValue}
          ref={inputRef}
          onChange={(e) => onChange(e.target.value)}
          className="capitalize placeholder:normal-case p-2 sm:p-3 text-sm sm:text-base flex-1 bg-white rounded-lg"
        />
        <Button
          type="submit"
          onClick={()=>{
            onClick(),
            inputRef.current?.focus()
          }}
          disabled={!inputValue}
          className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
        >
          Buscar
        </Button>
      </form>
    </div>
  );
};
