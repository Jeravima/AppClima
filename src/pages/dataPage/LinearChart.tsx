
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { ForecastItem } from "@/hook/useWeather";

import {
  
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  className: string;
  data: ForecastItem[];
}

export const LinearChart = ({ className = "", data }: Props) => {

  const chartData = data.map((item) => ({
    hour: new Date(item.dt_txt).toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
    }),
    temp: item.temp,
    feels_like: item.feels_like
  }));

  return (
    <div className={`${className}`}>
      <Card className="h-full">
        <CardHeader className="pb-3 md:pb-4">
          <CardTitle className="text-lg md:text-xl text-center">
            Temperatura y sensación térmica
          </CardTitle>
        </CardHeader>

        <CardContent className="h-48 md:h-60 lg:h-80 ">
          <div className=" h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="hour" />
                <YAxis
                  dataKey="temp"
                  width="auto"
                  domain={["dataMin - 10", "dataMax + 10"]}
                />

                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded border bg-background p-2 shadow-sm">
                          <div className="flex flex-col items-center gap-2">
                            <div className="space-x-1">
                              <span>Temperatura</span>
                              <span>{payload[0].value}°</span>
                            </div>
                            <div className="space-x-1">
                              <span>Sensación térmica</span>
                              <span>{payload[1].value}°</span>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="temp"
                  stroke="#2563eb"
                  strokeWidth={3}
                />

                <Line
                  type="natural"
                  dataKey="feels_like"
                  stroke="#DE2E23"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

