import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {   Droplets } from "lucide-react";

interface Props {
  humidity?: number;
  className:string
}

export const HumidityCard = ({ humidity, className='' }: Props) => {
  return (
    <div className={`${className}`} title="Humedad en el aire">
      <Card>
        <CardTitle className="text-center text-base xl:text-xl">
          Humedad
        </CardTitle>
        <CardContent>
          <div className="flex flex-col gap-1 items-center">
            <Droplets size={40} color="gray" />
            <p className="text-lg xl:text-xl">{Math.round(humidity ?? 0)}%</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
