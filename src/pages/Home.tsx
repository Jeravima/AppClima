import { Navbar } from "@/components/Navbar";
import { Principal } from "./home-components/Principal";
import { useWeather } from "@/hook/useWeather";
import { Forecast } from "./home-components/Forecast";

export const Home = () => {
  const { getData, weatherData, loading,forecastData } = useWeather();
  return (
    <div className=" flex flex-col">
      <Navbar onSearch={getData} />
      <main className="p-6  border-black">
        <h1 className="text-4xl">Dashboard Clima </h1>
        {loading ? (
          <div>
            <p>Cargando...</p>
          </div>
        ) : weatherData ? (
          <div className="grid grid-cols-12 gap-4">
            <Principal
              className="col-span-12 md:col-span-4"
              weatherData={weatherData}
            />

            <Forecast
              className="col-span-12 md:col-span-12"
              dataForecast={forecastData}
            />
          </div>
        ) : null}
      </main>
    </div>
  );
};
