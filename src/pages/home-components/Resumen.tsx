import type { Data } from "@/AppClima";

interface Props {
  className: string;
  weatherData: Data | null;
}
export const Resumen = ({ className = "", weatherData }: Props) => {
  return (
    <div
      className={`shadow-lg bg-linear-to-br from-slate-100 to-slate-200 flex flex-col items-center rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-xl ${className}`}
    >
      <img
        src={`https://openweathermap.org/img/wn/${weatherData?.icon}@2x.png`}
        alt="iconWeather"
        className="h-24 md:h-32 lg:h-40 w-24 md:w-32 lg:w-40 drop-shadow-lg object-contain"
      />
      <p className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 mt-2">
        {weatherData?.temp}°
      </p>
      <p className="capitalize text-sm md:text-base lg:text-lg text-slate-600 mt-2">
        {weatherData?.description}
      </p>
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mt-3 text-center">
        {weatherData?.name},
        <span className="text-sm md:text-lg lg:text-xl font-normal text-slate-600 block md:inline md:ml-2">
          {weatherData?.country}
        </span>
      </h2>
    </div>
  );
};
