import { useWeatherContext } from "@/context/SearchContext";
import { LinearChart } from "./LinearChart";

export const Data = () => {
  const { weatherData, forecastData } = useWeatherContext();

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100">
      <main className=" flex-1 p-4 md:p-6 lg:p-8">
        {weatherData ? (
          <div>
            <div className="flex  justify-center mb-4 ">
              <h1 className="text-4xl font-bold text-gray-800">
                {weatherData?.name}
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 lg:gap-6">
              <LinearChart
                data={forecastData}
                className="col-span-1 md:col-span-7 lg:col-span-8"
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-screen">
            <p className="text-gray-500 font-bold text-2xl">No Data</p>
          </div>
        )}
      </main>
    </div>
  );
};
