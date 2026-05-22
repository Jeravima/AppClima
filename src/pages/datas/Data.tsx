import { useWeatherContext } from "@/context/SearchContext";

export const Data = () => {
  const { weatherData } = useWeatherContext();
  console.log("Data", weatherData);

  return (
    <div>
      <div>
        <main>
          {weatherData ? (
            <div className="flex justify-center m-4">
              <h1 className="text-4xl font-bold">{weatherData?.name}</h1>
              <div>
                
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-screen">
              <p className="text-gray-400 font-bold text-2xl">No Data</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
