import { Card, CardContent } from "@/components/ui/card";
import { Cloud } from "lucide-react";

interface Props {
  humidity?: number;
}

export const HumidityCard = ({ humidity }: Props) => {
  return (
    <div>
      <Card>
        <CardContent>
          <div className="flex flex-col gap-1 items-center">
            <Cloud size={30}  />
            <p className="font-medium ">
              {Math.round(humidity ?? 0)}%
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
