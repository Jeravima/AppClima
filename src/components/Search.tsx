import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Props {
  inputValue: string;
  onChange: (value: string) => void;
  onClick: () => void;
}

export const Search = ({ inputValue, onChange, onClick }: Props) => {
  
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <form action="" className="flex gap-4" onSubmit={handleSubmit}>
        <Input
          placeholder="Ingresa el nombre de tu ciudad"
          type="text"
          value={inputValue}
          onChange={(e) => onChange(e.target.value)}
          className="capitalize placeholder:normal-case p-1 w-lg bg-white"
        />
        <Button type="submit" onClick={onClick} disabled={!inputValue}>
          Buscar
        </Button>
      </form>
    </div>
  );
};
