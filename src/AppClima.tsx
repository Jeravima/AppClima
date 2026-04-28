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
  background?: string;
}

const colorBackground = {
  Clear: "bg-linear-to-r from-amber-200 to-yellow-500",
  Clouds: "bg-linear-to-r from-neutral-300 to-stone-400",
  Rain: "bg-linear-to-r from-slate-300 to-slate-500",
  Snow: "bg-gradient-to-r from-indigo-400 to-cyan-400",
  Mist: "bg-gradient-to-r from-slate-500 to-slate-800",
  Thunderstorm: "bg-gradient-to-r from-slate-900 to-slate-700",
  Default: "bg-gradient-to-r from-slate-300 to-slate-500",
};

export const AppClima = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState<Boolean>(false);
  const [weatherData, setWeatherData] = useState<Data | null>(null);

  const getData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=es`,
      );
      if (city === "") {
        toast.error("No has ingresado nada");
      }
      const data = await response.json();
      setLoading(false);

      setWeatherData({
        temp: Math.round(data.main.temp),
        name: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        background: data.weather[0].main,
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
    <div
      className={`min-h-screen flex items-center  justify-center p-6 ${
        weatherData?.background === "Clear"
          ? colorBackground.Clear
          : weatherData?.background === "Clouds"
            ? colorBackground.Clouds
            : weatherData?.background === "Snow"
              ? colorBackground.Snow
              : weatherData?.background === "Mist"
                ? colorBackground.Mist
                : weatherData?.background === "Rain"
                  ? colorBackground.Rain
                  : weatherData?.background === "Thunderstorm"
                    ? colorBackground.Thunderstorm
                    : colorBackground.Default
      } transition-colors duration-1000`}
    >
      <div className=" bg-white/30 backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center justify-center min-h-75 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8 ">
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
