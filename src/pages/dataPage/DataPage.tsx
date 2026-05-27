

import { useWeatherContext } from "@/context/SearchContext";
import { LinearChart } from "./LinearChart";
import { HumidityCard } from "./HumidityCard";
import { WinCard } from "./WindCard";
import { WindDirectionCard } from "./WindDirectionCard";

export const Data = () => {
  const { weatherData, forecastData } = useWeatherContext();

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100">
      <main className=" flex-1 p-2 sm:p-4 md:p-6 lg:p-8">
        {weatherData ? (
          <div>
            <div className="flex  justify-center mb-3 sm:mb-4 ">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                {weatherData?.name}
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              <LinearChart
                data={forecastData}
                className="col-span-1 sm:col-span-2 md:col-span-7 lg:col-span-8"
              />
              <WinCard
                className="col-span-1 sm:col-span-1 md:col-span-7 lg:col-span-2"
                wind={weatherData.wind.speed}
              />
              <HumidityCard
                className="col-span-1 sm:col-span-1 md:col-span-7 lg:col-span-2"
                humidity={weatherData.main.humidity}
              />
              <WindDirectionCard
                className="col-span-1 sm:col-span-1 md:col-span-7 lg:col-span-2"
                winDeg={weatherData.wind.deg}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-screen">
            <p className="text-gray-500 font-bold text-lg sm:text-xl md:text-2xl">
              No hay datos para mostrar
            </p>
          </div>
        )}
      </main>
    </div>
  );
};