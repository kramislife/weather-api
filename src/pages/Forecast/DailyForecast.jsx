import { DailyForecastItems } from "@/constant/DailyForecastItems";
import { Droplet, TriangleAlert } from "lucide-react";

const DailyForecast = () => {
  return (
    <section>
      <div className="bg-gray-700/20 border-none rounded-2xl px-5 py-4 mx-4 my-3 space-y-5">
        {DailyForecastItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-row items-center w-full space-x-10"
          >
            <div>
              <h1 className="font-chakra text-sm tracking-wide">{item.name}</h1>
              <span className="text-sm text-stone-400 font-chakra">
                {item.date}
              </span>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-row gap-3">
                <video
                  src={item.condition}
                  loop
                  muted
                  autoPlay
                  className="w-12 h-12"
                ></video>
                <h1 className="text-4xl tracking-wide">{item.temperature}</h1>
              </div>
              <div>
                <span className="text-md text-stone-400 font-chakra flex gap-1">
                  <Droplet />
                  {item.humidity}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col bg-gray-700/20 rounded-md py-2 px-3 gap-2 font-chakra text-stone-200">
          <div className="flex items-center gap-2 border-b border-stone-400 pb-2">
            <TriangleAlert color="#e71313" />
            <h1>ALERTS</h1>
          </div>
          {DailyForecastItems.map(
            (item) =>
              item.alerts &&
              item.alerts.map((alert, index) => (
                <div
                  key={index}
                  className=" text-red-400 text-sm flex flex-col gap-1"
                >
                  <div>
                    {alert.category} - {alert.description}
                  </div>
                  <div className="text-xs text-stone-300">
                    {alert.timing.from.time} {alert.timing.from.day} -{" "}
                    {alert.timing.to.time} {alert.timing.to.day}
                  </div>
                </div>
              ))
          )}
        </div>
        <div className="flex flex-col   font-chakra text-stone-200">
          {DailyForecastItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-2 text-sm">
              <div className="grid grid-cols-2 gap-2 ml-3">
                <span className="text-stone-300">
                  Heat Index: {item.heatIndex}
                </span>
                <span className="text-stone-300">
                  Wind: {item.wind.speed} {item.wind.direction}
                </span>
                <span className="text-stone-300">
                  Cloud Cover: {item.cloudCover}
                </span>
                <span className="text-stone-300">
                  Dew Point: {item.dewPoint}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyForecast;
