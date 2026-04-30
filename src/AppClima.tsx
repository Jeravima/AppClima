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
  Clear: "bg-gradient-to-br from-amber-200 via-yellow-300 to-yellow-500",
  Clouds: "bg-gradient-to-br from-neutral-200 via-slate-300 to-stone-400",
  Rain: "bg-gradient-to-br from-slate-300 via-slate-400 to-slate-600",
  Snow: "bg-gradient-to-br from-indigo-300 via-blue-300 to-cyan-400",
  Mist: "bg-gradient-to-br from-slate-400 via-slate-600 to-slate-800",
  Thunderstorm: "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900",
  Default: "bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500",
};

export const AppClima = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState<Boolean>(false);
  const [weatherData, setWeatherData] = useState<Data | null>(null);
  const [sugestions, setSugestions] = useState<any[]>([]);

  const getData = async (_cityName?:string) => {
    setLoading(true);
    setCity('')
    setSugestions([])

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

      if (data.cod === "404") {
        alert("Ciudad no encontrada");
      }
    } catch (error) {
      toast.error("Algo salio mal");
    }
  };

  const getSuggestions = async (value: string) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${import.meta.env.VITE_API_KEY}`,
      );
      const data = await res.json();
        
      setSugestions(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center p-4 sm:p-6 ${
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
      } transition-colors duration-1500`}
    >
      <div className="w-full max-w-md bg-white/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center shadow-xl transition-all duration-1000">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-6 sm:mb-8">
          App Clima
        </h1>
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8">
          <div className="w-full relative">
            <Search
              inputValue={city}
              onChange={(value) => {
                setCity(value);

                if (value.length >= 3) {
                  getSuggestions(value);
                } else {
                  setSugestions([]);
                }
              }}
              onClick={()=>getData()}
            />

            {sugestions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white rounded-lg shadow-md mt-1 z-10">
                {sugestions.map((item, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      const selectedCity = `${item.name}, ${item.country}`;

                      setCity(selectedCity);
                      setSugestions([]);
                      getData(selectedCity)
                    }}
                  >
                    {item.name}, {item.state ? item.state + "," : ""}{" "}
                    {item.country}
                  </li>
                ))}
              </ul>
            )}
          </div>

         
          {loading ? (
            <div className="animate-pulse text-center text-sm sm:text-base">
              Cargando...
            </div>
          ) : weatherData ? (
            <div className="transition-all duration-500 opacity-100 w-full flex justify-center">
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
