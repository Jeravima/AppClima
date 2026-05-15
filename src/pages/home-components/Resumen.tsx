import type { WeatherResponse } from "@/types/weather";
import { WinCard } from "./WindCard";
import { HumidityCard } from "./HumidityCard";

interface Props {
  className: string;
  weatherData: WeatherResponse | null;
}
export const Resumen = ({ className = "", weatherData }: Props) => {

  const hour = new Date((weatherData?.dt ?? 0)*1000).toLocaleTimeString('es-ES',{
    hour:'2-digit',
    minute:'2-digit'
  })



  return (
    <div
      className={`shadow-lg bg-linear-to-br from-slate-100 to-slate-200 flex flex-col items-center rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-xl ${className}`}
    >
      <img
        src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
        alt="iconWeather"
        className="h-24 md:h-32 lg:h-40 w-24 md:w-32 lg:w-40 drop-shadow-lg object-contain"
      />
      <p className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 mt-2">
        {Math.round(weatherData?.main.temp ?? 0)}°
      </p>
      <p>{hour}</p>
      <p className="first-letter:uppercase text-sm md:text-base lg:text-lg text-slate-600 mt-2">
        {weatherData?.weather[0].description}
      </p>
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mt-3 text-center">
        {weatherData?.name},
        <span className="text-sm md:text-lg lg:text-xl font-medium text-slate-600 block md:inline md:ml-2">
          {weatherData?.sys.country}
        </span>
      </h2>
      <p className="font-normal text-slate-600">
        Sensación de {Math.round(weatherData?.main.feels_like ?? 0)}°
      </p>

      <div className="flex gap-2 mt-2">
        <WinCard wind={weatherData?.wind.speed} />
        <HumidityCard humidity={weatherData?.main.humidity}/>

      </div>
    </div>
  );
};
