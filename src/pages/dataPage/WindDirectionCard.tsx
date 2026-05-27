import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Compass } from "lucide-react";

interface Props{
    className: string, 
    winDeg: number,
}

 
export const WindDirectionCard = ({className='', winDeg}:Props) => {
    const directionWind = (deg:number)=>{
        const directions = ["Norte", "NorEste", "Este", "SurEste", "Sur", "SurOeste", "Oeste", "NorOeste"];

        const direction = directions[Math.round(deg / 45) % 8];

        return <span>{direction}</span>;
    }

  return (
    <div className={`${className}`}>
      <Card>
        <CardTitle className="text-center text-base xl:text-xl">
          Dirección del viento
        </CardTitle>
        <CardContent>
          <div className="flex flex-col gap-1 items-center">
           <Compass size={40} color="green" />
            <p className="text-lg xl:text-xl "> {directionWind(winDeg)}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
