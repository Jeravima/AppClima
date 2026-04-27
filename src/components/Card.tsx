import type { Data } from "@/AppClima";



export const Card = ({ icon, temp, description, name, country }: Data) => {
  return (
    <div className=" mx-auto w-60  h-72 flex-col gap-4 ">
      <div className=" flex flex-col justify-center items-center p-4">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        <h2 className="text-4xl">{temp}°</h2>
        <p className="capitalize text-lg">{description}</p>
        <p className="text-sm opacity-80">
          {name}, {country}
        </p>
      </div>
    </div>
  );
};
