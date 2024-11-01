import { DailyForecastItems } from "@/constant/DailyForecastItems";
import { Droplet, TriangleAlert } from "lucide-react";

const DailyForecast = () => {
  return (
    <section>
      <div className="space-y-5">
        {DailyForecastItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-700/20 rounded-2xl px-5 py-8 mx-4 my-3 space-y-5"
          >
            <div className="flex flex-row items-center w-full space-x-10">
              <div>
                <h1 className="font-chakra text-sm tracking-wide">
                  {item.name}
                </h1>
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
                  <span className="flex items-center text-md text-stone-400 font-chakra gap-1">
                    <Droplet size={16} />
                    {item.humidity}
                  </span>
                </div>
              </div>
            </div>

            {/* Alerts Section */}
            {item.alerts && item.alerts.length > 0 && (
              <div className="flex flex-col bg-gray-700/20 rounded-md py-2 px-3 gap-2 font-chakra text-stone-200">
                <div className="flex items-center gap-2 border-b border-stone-400 py-2">
                  <TriangleAlert color="#e71313" />
                  <h1>ALERTS</h1>
                </div>
                {item.alerts.map((alert, index) => (
                  <div
                    key={index}
                    className="text-red-400 text-sm flex flex-col gap-2 py-2"
                  >
                    <div>
                      {alert.category}{" "}
                      <span className="text-stone-200">
                        {" "}
                        - {alert.description}
                      </span>
                    </div>
                    <div className="text-xs text-stone-300">
                      {alert.timing.from.time} {alert.timing.from.day} -{" "}
                      {alert.timing.to.time} {alert.timing.to.day}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Additional Info Section */}
            <div className="font-chakra text-stone-200 px-2">
              <div className="text-sm">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-5">
                    <h1 className="text-stone-300 font-bold">
                      Heat Index:{" "}
                      <span className="text-stone-400">{item.heatIndex}</span>
                    </h1>
                    <h1 className="text-stone-300">
                      Wind:{" "}
                      <span className="text-stone-400">
                        {item.wind.speed} {item.wind.direction}
                      </span>
                    </h1>
                  </div>
                  <div className="flex flex-col gap-5">
                    <h1 className="text-stone-300">
                      Cloud Cover:{" "}
                      <span className="text-stone-400">{item.cloudCover}</span>
                    </h1>
                    <h1 className="text-stone-300">
                      Dew Point:{" "}
                      <span className="text-stone-400">{item.dewPoint}</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailyForecast;
