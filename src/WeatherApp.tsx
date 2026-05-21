import { RouterProvider } from "react-router"
import { appRouter } from "./routes/routes"
import { SearchContextProvider } from "./context/SearchContext"



export const WeatherApp = () => {
  return (
    
      <SearchContextProvider>
        <RouterProvider router={appRouter} />
      </SearchContextProvider>
      
  );
}
