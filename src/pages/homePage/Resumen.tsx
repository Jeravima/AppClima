import type { WeatherResponse } from "@/types/responseAPI";
import {Heart} from 'lucide-react'

import { MaxAndMin } from "./MaxAndMin";
import { useFavorites } from "@/context/FavoriteCityContex";

interface Props {
  className: string;
  weatherData: WeatherResponse | null;
}
export const Resumen = ({ className = "", weatherData }: Props) => {

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const toggleFavorite = () => {
    if (!weatherData) return;

    if (isFavorite(weatherData.id)) {
      removeFavorite(weatherData.id);
    } else {
      addFavorite({
        id: weatherData.id,
        name: weatherData.name,
        country: weatherData.sys.country,
        temp: weatherData.main.temp,
        feels_like: weatherData.main.feels_like,
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
       
      });
    }
  };
  

  return (
    <div
      className={`shadow-lg bg-white/10 backdrop-blur-lg border border-border flex flex-col items-center rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-xl ${className} `}
    >
      <div className="flex justify-start w-full">
        <button
          onClick={toggleFavorite}
          className="cursor-pointer transition-colors hover:scale-110"
          title={
            isFavorite(weatherData?.id ?? 0)
              ? "Remover de favoritos"
              : "Guardar como favorito"
          }
        >
          <Heart
            size={26}
            color="red"
            fill={isFavorite(weatherData?.id ?? 0) ? "red" : "none"}
          />
        </button>
      </div>

      <img
        src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
        alt="iconWeather"
        className="h-30 md:h-35 lg:h-45 w-30 md:w-35 lg:w-45 drop-shadow-lg object-contain"
      />
      <p className="text-8xl md:text-5xl lg:text-7xl font-bold text-foreground mt-2">
        {Math.round(weatherData?.main.temp ?? 0)}°
      </p>

      <p className="first-letter:uppercase text-sm md:text-base lg:text-lg text-muted-foreground mt-2">
        {weatherData?.weather[0].description}
      </p>
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mt-3 text-center">
        {weatherData?.name},
        <span className="text-sm md:text-lg lg:text-xl font-medium text-muted-foreground block md:inline md:ml-2">
          {weatherData?.sys.country}
        </span>
      </h2>
      <p className="font-normal text-foreground">
        Sensación térmica de {Math.round(weatherData?.main.feels_like ?? 0)}°
      </p>

      <div className="flex gap-2 mt-4">
        <MaxAndMin
          temp_max={weatherData?.main.temp_max}
          temp_min={weatherData?.main.temp_min}
        />
      </div>
    </div>
  );
};
