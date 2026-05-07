import { RouterProvider } from "react-router"
import { appRouter } from "./routes/routes"

export const WeatherApp = () => {
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}
