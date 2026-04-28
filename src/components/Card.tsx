import type { Data } from "@/AppClima";



export const Card = ({ icon, temp, description, name, country }: Data) => {
  return (
    <div className=" mx-auto w-60  h-72 flex-col gap-2 ">
      <div className=" flex flex-col justify-center items-center p-4">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className="w-30 h-30"
        />
        <h2 className="text-6xl">{temp}°</h2>
        <p className="capitalize text-xl">{description}</p>
        <p className="text-sm opacity-80">
          {name}, {country}
        </p>
      </div>
    </div>
  );
};
