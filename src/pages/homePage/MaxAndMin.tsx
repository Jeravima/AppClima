import { MoveDown, MoveUp } from "lucide-react";

interface Props {
  temp_min?: number;
  temp_max?: number;
}

export const MaxAndMin = ({ temp_min, temp_max }: Props) => {
  return (
    <div>
      <div className="flex  gap-5">
        <div title="Temperatura maxima">
          <MoveUp color='red' className="drop-shadow-lg "/>
          <p className="text-red-800 dark:text-red-300">{Math.round(temp_max ?? 0)+2}°</p>
        </div>
        <div title="Temperatura minima">
          <MoveDown color="blue" className="drop-shadow-lg"/>
          <p className={`text-blue-800 dark:text-blue-300`}>{Math.round(temp_min ?? 0)}°</p>
        </div>
      </div>
    </div>
  );
};
