import { useWeather, type ForecastItem } from "@/hook/useWeather";
import type { WeatherResponse } from "@/types/responseAPI";
import { createContext, useContext, type PropsWithChildren } from "react";

interface WeatherContextType {
  weatherData: WeatherResponse | null;
  loading: boolean;
  getData: any;
  forecastData: ForecastItem[]
}

export const SearchContext = createContext<WeatherContextType | null>(null);

export const SearchContextProvider = ({ children }: PropsWithChildren) => {
  const { loading, getData, weatherData, forecastData } = useWeather();

  return (
    <SearchContext.Provider value={{ weatherData, loading, getData, forecastData }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useWeather debe usarse dentro de WeatherProvider");
  }
  return context;
};
