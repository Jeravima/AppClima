import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {  Cloudy } from "lucide-react";

interface Props {
  humidity?: number;
  className:string
}

export const HumidityCard = ({ humidity, className='' }: Props) => {
  return (
    <div className={`${className}`}>
      <Card>
        <CardTitle className="text-center text-lg md:text-xl">
          Humedad
        </CardTitle>
        <CardContent>
          <div className="flex flex-col gap-1 items-center">
            <Cloudy size={50} />
            <p className="text-lg xl:text-lg">{Math.round(humidity ?? 0)}%</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
