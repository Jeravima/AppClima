import { type ForecastItem } from "@/hook/useWeather";

interface Props {
  dataForecast: ForecastItem[];
  className: string;
}

export const Forecast = ({ dataForecast, className = "" }: Props) => {
  return (
    // <div
    //   className={`rounded-2xl p-6 backdrop-blur-sm bg-linear-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 shadow-2xl border border-slate-700/50 ${className}`}
    // >
    //   {/* Título */}
    //   <div className="mb-6">
    //     <h2 className="text-2xl font-bold text-white mb-1">Pronóstico</h2>

    //   </div>

    //   <div className="overflow-x-auto pb-2 scrollbar-hide">
    //     <div className="flex gap-3 min-w-max">
    //       {dataForecast.map((item) => (
    //         <div
    //           key={item.dt_txt}
    //           className="group relative overflow-hidden rounded-xl bg-linear-to-br from-slate-700/60 to-slate-800/60 p-4 backdrop-blur border border-slate-600/40 transition-all duration-300 hover:from-slate-600/80 hover:to-slate-700/80 hover:border-slate-500/60 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer shrink-0 w-24"
    //         >
    //           {/* Efecto de fondo en hover */}
    //           <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300" />

    //           {/* Contenido */}
    //           <div className="relative z-10 space-y-2 flex flex-col items-center h-full">
    //             {/* Hora */}
    //             <p className="text-xs font-semibold text-slate-300 whitespace-nowrap">
    //               {new Date(item.dt_txt).toLocaleTimeString("es-ES", {
    //                 hour: "2-digit",
    //                 minute: "2-digit",
    //               })}
    //             </p>

    //             {/* Icono del clima */}
    //             <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
    //               <img
    //                 src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
    //                 alt={item.description}
    //                 className="w-10 h-10 drop-shadow-lg"
    //                 loading="lazy"
    //               />
    //             </div>

    //             {/* Temperatura */}
    //             <p className="text-lg font-bold text-white">
    //               {Math.round(item.temp)}°
    //             </p>

    //             {/* Descripción pequeña */}
    //             <p className="text-xs text-slate-300 capitalize text-center line-clamp-2 min-h-8">
    //               {item.description}
    //             </p>
    //           </div>

    //           {/* Indicador de hover */}
    //           <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Mensaje si no hay datos */}
    //   {dataForecast.length === 0 && (
    //     <div className="text-center py-12">
    //       <p className="text-slate-400">
    //         No hay datos de pronóstico disponibles
    //       </p>
    //     </div>
    //   )}

    // </div>

    <div
      className={` overflow-x-auto shadow-lg p-4 rounden-md gap-3 ${className}`}
    >
      <h2>Pronostico</h2>
      <div className="flex gap-4">
        {dataForecast.map((item) => (
          <div className="rounded-lg text-black shrink-0 w-24  p-4 shadow-sm ">
            <img
              src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
              alt={item.description}
              className="w-10 h-10 drop-shadow-lg"
              loading="lazy"
            />
            <p>{Math.round(item.temp)}°</p>
            <p className="text-sm capitalize">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
