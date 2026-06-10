import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

interface Favorite {
  id: number;
  name: string;
  country: string;
  temp: number;
  feels_like: number;
  description: string;
  icon: string;
}

interface FavoritesContextType {
  favorites: Favorite[];
  addFavorite: (favorite: Favorite) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const FavoritesContext = createContext({} as FavoritesContextType);

export const FavoriteCityProvider = ({ children }: PropsWithChildren) => {
 

  const [favorites, setFavorites] = useState<Favorite[]>(() => {
    try {
      const stored = localStorage.getItem("favorites");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

 

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (favorite: Favorite) => {
    setFavorites((prev) => [...prev, favorite]);
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

  const isFavorite = (id: number) => {
    return favorites.some((fav) => fav.id === id);
  };
  return (
    <>
      <FavoritesContext.Provider
        value={{
          favorites,
          addFavorite,
          isFavorite,
          removeFavorite,
        }}
      >
        {children}
      </FavoritesContext.Provider>
    </>
  );


};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return context;
};
