import type { WeatherResponse } from "@/types/responseAPI";
import { useState } from "react";
import { toast } from "sonner";

export interface ForecastItem {
  dt_txt: string;
  temp: number;
  description: string;
  icon: string;
  feels_like: number;
  pop: number;
}

export const useWeather = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [forecastData, setForecastData] = useState<ForecastItem[]>([]);

  const getData = async (_cityName?: string) => {
    if (!_cityName) {
      toast.error("No has ingresado nada");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${_cityName}&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=es`,
      );

      const data = await response.json();

      if (data.cod === "404") {
        toast.error("Ciudad no encontrada");
        setLoading(false);
        return;
      }

      setWeatherData(data);

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${_cityName}&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=es`,
      );

      const forecast = await forecastResponse.json();

      const now = Date.now() / 1000;

      const forecastList = forecast.list
        .filter((item: any) => item.dt >= now)
        .slice(0, 8);

      const formattedForecast = forecastList.map((item: any) => ({
        dt_txt: item.dt_txt,
        temp: Math.round(item.main.temp),
        description: item.weather[0].description,
        icon: item.weather[0].icon,
        feels_like: Math.round(item.main.feels_like),
        pop: item.pop,
      }));

      setForecastData(formattedForecast);

      console.log("ForecastData", forecastData);
    } catch (error) {
      toast.error("Algo salió mal");
    } finally {
      setLoading(false);
    }
  };

  return {
    weatherData,
    forecastData,
    getData,
    loading,
  };
};
