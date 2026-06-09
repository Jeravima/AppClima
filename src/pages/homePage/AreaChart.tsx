import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { ForecastItem } from "@/hook/useWeather";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  className: string;
  data: ForecastItem[];
}

export const AreaChar = ({ className = "", data }: Props) => {
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
          <CardTitle className="text-lg md:text-xl font-bold text-center">
            Temperatura
          </CardTitle>
        </CardHeader>

        <CardContent className="h-48 md:h-60 lg:h-80">
          <div className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#e5e7eb"
                  vertical={false}
                />

                <XAxis
                  dataKey="hour"
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                  
                />

                <YAxis dataKey="temp" tick={{ fontSize: 12 }} unit="°" />

                <Tooltip content={({active,payload})=>{
                  if(active && payload && payload.length){
                    return(
                      <div className="rounded border bg-background p-2 shadow-sm">
                        <div className="flex flex-col items-center gap-2">

                        <span>Temperatura</span>
                        <span>{payload[0].value}°</span>
                        </div>
                      </div>
                    )
                  }
                }}
                  contentStyle={{
                    backgroundColor: "#f3f4f6",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="temp"
                  stroke="#2563eb"
                  strokeWidth={2}
                  fill="#dbeafe"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
