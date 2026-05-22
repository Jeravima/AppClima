import { useWeatherContext } from "@/context/SearchContext"


export const Locations = () => {
  const {weatherData} = useWeatherContext()
  return (
    <div>
        <h1>Locations</h1>
        <h2>{weatherData?.name}</h2>
    </div>
  )
}

