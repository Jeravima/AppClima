import { useWeatherContext } from "@/context/SearchContext";
import { LinearChart } from "./LinearChart";
import { HumidityCard } from "./HumidityCard";
import { WinCard } from "./WindCard";
import { WindDirectionCard } from "./WindDirectionCard";
import { Separator } from "@/components/ui/separator";

export const Data = () => {
  const { weatherData, forecastData } = useWeatherContext();

  return (
    <div className="flex flex-col w-full min-h-screen bg-background dark:bg-background">
      <main className=" flex-1 p-2 sm:p-4 md:p-6 lg:p-8">
        {weatherData ? (
          <div>
            <div className="flex  justify-center mb-3 sm:mb-4 ">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100">
                {weatherData?.name}
              </h1>
            </div>
            <Separator/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-4">
              <LinearChart
                data={forecastData}
                className="col-span-1 sm:col-span-2 md:col-span-7 lg:col-span-8 hover:shadow-xl"
              />

              <div className="col-span-1 sm:col-span-2 md:col-span-5 lg:col-span-4 flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                  <WinCard
                    className="col-span-1 flex-1"
                    wind={weatherData.wind.speed}
                  />
                  <HumidityCard 
                    className="col-span-1 flex-1"
                    humidity={weatherData.main.humidity}
                    
                  />
                </div>
                <WindDirectionCard
                  className="col-span-1 w-full"
                  winDeg={weatherData.wind.deg}
                />
              </div>
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
