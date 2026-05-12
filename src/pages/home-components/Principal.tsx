import type { Data } from "@/AppClima"

interface Props{
    className:string
    weatherData: Data | null
}
export const Principal = ({className = '',weatherData}:Props) => {

  return (
    <div className={`shadow bg-white rounded-xl p-4 ${className}`}>
      <h2 className="text-2xl font-bold">{weatherData?.name}</h2>
      <img src={`https://openweathermap.org/img/wn/${weatherData?.icon}@2x.png`} alt="" />
      <p>{weatherData?.temp}°</p>
      <p>{weatherData?.description}</p>
    </div>
  );
}
