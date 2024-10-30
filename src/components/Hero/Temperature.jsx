import storm from "@/assets/storm.webm";
import Condition from "./Condition";

const Temperature = () => {
  return (
    <section>
      <div className="flex justify-between h-full p-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-7xl font-bold pb-4">18°</h1>
          <span className="text-xl  text-stone-400">Thunderstorm</span>
        </div>

        <div className="flex justify-end w-32 h-32">
          <video src={storm} autoPlay loop muted></video>
        </div>
      </div>
      <h1 className="text-lg text-stone-400 px-5 pt-5 tracking-wide font-chakra font-semibold">
        Saturday, 30 October 2024
      </h1>

      <Condition />
    </section>
  );
};

export default Temperature;
