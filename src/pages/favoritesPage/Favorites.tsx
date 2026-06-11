import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useFavorites } from "@/context/FavoriteCityContex";

export const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 flex justify-center">
        Mis Favoritos
      </h1>
      <Separator />
      {favorites.length === 0 ? (
        <p className="flex items-center justify-center text-muted-foreground text-xl">
          No tienes favoritos aún
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {favorites.map((fav) => (
            <div
              key={fav.id}
              className="p-4 bg-white/10 rounded-lg flex flex-col gap-2"
            >
              <p className="md:text-3xl text-xl font-bold">
                {Math.round(fav.temp)}°
              </p>
              <p className="md:text-xl text-base first-letter:uppercase">
                {fav.description}
              </p>
              <h2 className="md:text-xl text-lg">
                {fav.name},{" "}
                <span className="text-muted-foreground">{fav.country} </span>
              </h2>

              <Button
                variant="destructive"
                size="default"
                onClick={() => removeFavorite(fav.id)}
              >
                Eliminar
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

