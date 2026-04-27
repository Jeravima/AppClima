import { useState } from "react";
import { Search } from "./components/Search";
import { Card } from "./components/Card";
import { toast } from "sonner";

export interface Data {
  name?: string;
  temp?: number;
  description?: string;
  icon?: string;
  country?: string;
}

export const AppClima = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState<Boolean>(false);
  const [weatherData, setWeatherData] = useState<Data | null>(null);

  const getData = async () => {
    setLoading(true);
    if (city === "") {
      toast.error("No has ingresado nada");
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=es`,
      );
      const data = await response.json();
      setLoading(false);

      setWeatherData({
        temp: Math.round(data.main.temp),
        name: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      });

      console.log(data);
      if (data.cod === "404") {
        alert("Ciudad no encontrada");
      }
    } catch (error) {
      toast.error("Algo salio mal");
    }
  };

  return (
    <div className="min-h-screen flex items-center  justify-center p-6 ">
      <div className=" bg-blue-400 rounded-2xl p-6 flex flex-col items-center justify-center min-h-75">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 ">
          App Clima{" "}
        </h1>
        <div className="justify-center flex-col">
          <Search inputValue={city} onChange={setCity} onClick={getData} />

          {loading ? (
            <div className="animate-pulse text-center">Cargando...</div>
          ) : weatherData ? (
            <div className="transition-all duration-500 opacity-100">
              <Card
                country={weatherData.country}
                description={weatherData.description}
                icon={weatherData.icon}
                name={weatherData.name}
                temp={weatherData.temp}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
