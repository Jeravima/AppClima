import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Wind } from "lucide-react";

interface Props {
  wind?: number;
  className:string
}

export const WinCard = ({ wind,className='' }: Props) => {
  return (
    <div className={`${className}`}>
      <Card>
        <CardTitle className="text-center text-lg md:text-xl">Viento</CardTitle>
        <CardContent>
          <div className="flex flex-col gap-1 items-center">
            <Wind size={50} />
            <p className="font-medium ">
              {Math.round(wind ?? 0)}
              <span> km/h</span>{" "}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
