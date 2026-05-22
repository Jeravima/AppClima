
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
  }));

  return (
    <div className={`${className}`}>
      <Card className="h-full">
        <CardHeader className="pb-3 md:pb-4">
          <CardTitle className="text-lg md:text-xl">Temperatura</CardTitle>
        </CardHeader>

        <CardContent className="h-48 md:h-60 lg:h-80 ">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="hour" />
              <YAxis dataKey='temp' />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="temp"
                stroke="#2563eb"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

