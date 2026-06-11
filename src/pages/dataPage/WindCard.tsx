import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Wind } from "lucide-react";

interface Props {
  wind?: number;
  className:string
}

export const WinCard = ({ wind,className='' }: Props) => {
  return (
    <div className={`${className}`} title="Velocidad del viento">
      <Card>
        <CardTitle className="text-center text-base xl:text-xl">Viento</CardTitle>
        <CardContent>
          <div className="flex flex-col gap-1 items-center">
            <Wind size={40} color="blue" />
            <p className="text-lg xl:text-xl ">
              {Math.round(wind ?? 0)}
              <span> km/h</span>{" "}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
