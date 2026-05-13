import { useState } from "react";
import { toast } from "sonner";

export interface Data {
  name?: string;
  temp?: number;
  description?: string;
  icon?: string;
  country?: string;
}

export interface ForecastItem {
  dt_txt: string;
  temp: number;
  description: string;
  icon: string;
}

export const useWeather = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<Data | null>(null);
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

      setWeatherData({
        temp: Math.round(data.main.temp),
        name: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      });

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${_cityName}&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=es`,
      );

      const forecast = await forecastResponse.json();

      const formattedForecast = forecast.list.slice(0, 9).map((item: any) => ({
        dt_txt: item.dt_txt,
        temp: Math.round(item.main.temp),
        description: item.weather[0].description,
        icon: item.weather[0].icon,
      }));

      setForecastData(formattedForecast);
      console.log(forecastData)
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
