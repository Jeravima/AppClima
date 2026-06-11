import { type ForecastItem } from "@/hook/useWeather";

interface Props {
  dataForecast: ForecastItem[];
  className: string;
}

export const Forecast = ({ dataForecast, className = "" }: Props) => {
  return (
    <div
      className={`overflow-hidden shadow-lg p-4 md:p-6 rounded-lg bg-white/10 backdrop-blur-lg border border-border ${className}`} title="Pronóstico para las siguiente horas"
    >
      <h2 className="text-lg md:text-xl font-bold text-foreground text-center mb-4">
        Pronóstico para las siguientes horas
      </h2>
      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-2 md:gap-3 lg:gap-4 pb-2  ">
          {dataForecast.map((item, index) => (
            <div
              key={index}
              className="rounded-lg bg-white/10 backdrop-blur-lg border border-border  shrink-0 w-20 md:w-24 flex flex-col items-center  p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <p className="text-xs md:text-sm font-semibold text-muted-foreground whitespace-nowrap">
                {new Date(item.dt_txt).toLocaleTimeString("es-ES", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                alt={item.description}
                className="w-8 md:w-10 h-8 md:h-10 drop-shadow-lg object-contain"
                loading="lazy"
              />
              <p className="text-sm md:text-base font-bold text-foreground">
                {Math.round(item.temp)}°
              </p>
            </div>
          ))}

          {dataForecast.length === 0 && (
            <div className="w-full text-center py-8 md:py-12">
              <p className="text-slate-400 text-sm md:text-base">
                No hay datos de pronóstico disponibles
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
