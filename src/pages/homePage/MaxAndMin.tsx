import { MoveDown, MoveUp } from "lucide-react";

interface Props {
  temp_min?: number;
  temp_max?: number;
}

export const MaxAndMin = ({ temp_min, temp_max }: Props) => {
  return (
    <div>
      <div className="flex  gap-5">
        <div>
          <MoveUp color='red'/>
          <p className="text-red-800">{Math.round(temp_max ?? 0)+2}°</p>
        </div>
        <div>
          <MoveDown color="blue" />
          <p className="text-blue-800">{Math.round(temp_min ?? 0)}°</p>
        </div>
      </div>
    </div>
  );
};
