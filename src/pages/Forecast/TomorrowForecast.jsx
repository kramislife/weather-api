import React from "react";
import { TomorrowForecastItems } from "@/constant/TomorrowForecastItems";

const TomorrowForecast = () => {
  return (
    <section>
      <div className="h-full w-full px-5 pt-5">
        <ul className="w-full grid gap-5">
          {TomorrowForecastItems.map((item) => (
            <li key={item.id} className="font-chakra font-semibold grid grid-cols-4 items-center">
              <h1 className="text-stone-300 text-lg">{item.time}</h1>
              <span className="text-stone-400 text-md font-bold text-center">{item.temperature}</span>
              <video 
                className="h-10 w-10 mx-auto" 
                src={item.condition} 
                autoPlay 
                loop 
                muted
                playsInline
                preload="auto"
                loading="lazy"
              ></video>
              <span className="text-stone-400 text-md text-center tracking-wide">{item.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TomorrowForecast;
