import { RouterProvider } from "react-router";
import { appRouter } from "./routes/routes";
import { SearchContextProvider } from "./context/SearchContext";
import { ThemeProvider } from "./context/theme-provider";
import { FavoriteCityProvider } from "./context/FavoriteCityContex";

export const WeatherApp = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <SearchContextProvider>
        <FavoriteCityProvider>

        <RouterProvider router={appRouter} />
        </FavoriteCityProvider>
      </SearchContextProvider>
    </ThemeProvider>
  );
};
