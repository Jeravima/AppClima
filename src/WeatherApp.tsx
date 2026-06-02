import { RouterProvider } from "react-router";
import { appRouter } from "./routes/routes";
import { SearchContextProvider } from "./context/SearchContext";
import { ThemeProvider } from "./context/theme-provider";

export const WeatherApp = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <SearchContextProvider>
        <RouterProvider router={appRouter} />
      </SearchContextProvider>
    </ThemeProvider>
  );
};
