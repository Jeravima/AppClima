import { Card, CardContent } from "@/components/ui/card";
import { Wind } from "lucide-react";

interface Props {
  wind?: number;
}

export const WinCard = ({ wind }: Props) => {
  return (
    <div>
      <Card>
        <CardContent>
          <div className="flex flex-col gap-1 items-center">
            <Wind size={30} />
            <p className="font-medium ">
              {Math.round(wind ?? 0)}
              <span>km/h</span>{" "}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
