import { useWeatherContext } from "@/context/SearchContext"


export const Favorites = () => {
  const {weatherData} = useWeatherContext()
  return (
    <div>
        <h1>Favorites</h1>
        <h2>{weatherData?.name}</h2>
    </div>
  )
}

