import { Navbar } from "@/components/Navbar";
import { Resumen } from "./Resumen";
import { Forecast } from "./Forecast";
import {  useWeatherContext } from "@/context/SearchContext";
import { AreaChar } from "./AreaChart";

export const Home = () => {
  
  const {getData, weatherData, loading, forecastData} = useWeatherContext()
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100">
      <Navbar onSearch={getData} />
      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 font-bold text-gray-800 text-center">
          Dashboard Clima
        </h1>
        {loading ? (
          <div className="flex items-center justify-center py-12 md:py-24">
            <p className="text-gray-600 text-base md:text-lg">Cargando...</p>
          </div>
        ) : weatherData ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 lg:gap-6">
            <Resumen
              className="col-span-1 md:col-span-5 lg:col-span-4"
              weatherData={weatherData}
            />
            <AreaChar
              className="col-span-1 md:col-span-7 lg:col-span-8"
              data={forecastData}
            />

            <Forecast
              className="col-span-1 md:col-span-12"
              dataForecast={forecastData}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center py-16 md:py-32">
            <div className="text-center">
              <svg
                className="mx-auto h-16 md:h-20 w-16 md:w-20 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <p className="text-gray-500 text-lg md:text-xl font-medium">
                Busca una ciudad para ver el clima
              </p>
              <p className="text-gray-400 text-sm md:text-base mt-2">
                Ingresa el nombre de una ciudad en la barra de búsqueda arriba
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
