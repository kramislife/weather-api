import storm from "@/assets/storm.webm";
import Condition from "./Condition";

const Temperature = () => {
  return (
    <section>
      <div className="flex justify-between h-full p-5">
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl font-semibold pb-4">18° C</h1>
          <span className="text-xl  text-stone-400">Thunderstorm</span>
        </div>

        <div className="flex justify-end w-32 h-32">
          <video src={storm} autoPlay loop muted></video>
        </div>
      </div>
      <h1 className="text-lg text-stone-200 px-5 pt-5 tracking-wide font-chakra font-semibold">
        Philippines
      </h1>
      <h1 className="text-md text-stone-400 px-5 pb-2 tracking-wide font-chakra font-semibold">
        Saturday, 30 October 2024
      </h1>

      <Condition />
    </section>
  );
};

export default Temperature;
