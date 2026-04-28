import type { Data } from "@/AppClima";

export const Card = ({ icon, temp, description, name, country }: Data) => {
  return (
    <div className="w-full max-w-xs mx-auto flex flex-col gap-2">
      <div className="flex flex-col justify-center items-center p-4 sm:p-6">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain"
        />
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground">
          {temp}°
        </h2>
        <p className="capitalize text-base sm:text-lg md:text-xl text-foreground/90">
          {description}
        </p>
        <p className="text-xs sm:text-sm md:text-base opacity-80 text-foreground">
          {name}, {country}
        </p>
      </div>
    </div>
  );
};
