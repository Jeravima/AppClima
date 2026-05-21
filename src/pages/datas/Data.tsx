import { useWeatherContext } from "@/context/SearchContext";


export const Data = () => {

  const {weatherData} = useWeatherContext()
  console.log('Data', weatherData)
  


  return (
    <div>
      <div>
        <main>
          <h1>Data</h1>

          <p>{weatherData?.name}</p>
          <p>{weatherData?.main.temp}</p>
        </main>
      </div>
    </div>
  );
};
