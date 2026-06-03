import { MoveDown, MoveUp } from "lucide-react";

interface Props {
  temp_min?: number;
  temp_max?: number;
}

export const MaxAndMin = ({ temp_min, temp_max }: Props) => {
  return (
    <div>
      <div className="flex  gap-5">
        <div title="Temperatura maxima" className="space-y-1">
          <MoveUp className="drop-shadow-lg text-[#FA0000] dark:text-[#FF5C5C]  " />
          <p className="text-[#FA0000] dark:text-[#FF5C5C]">
            {Math.round(temp_max ?? 0) + 2}°
          </p>
        </div>
        <div title="Temperatura minima" className="space-y-1">
          <MoveDown className="drop-shadow-lg text-[#0075FA] dark:text-[#5CA8FF]" />
          <p className={`text-[#0075FA] dark:text-[#5CA8FF]`}>
            {Math.round(temp_min ?? 0)}°
          </p>
        </div>
      </div>
    </div>
  );
};
