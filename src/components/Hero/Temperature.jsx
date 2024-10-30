import storm from "@/assets/storm.webm";
import Condition from "./Condition";

const Temperature = () => {
  return (
    <section>
      <div className="flex  justify-between h-full px-10 py-2">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-7xl font-bold pb-4">18°</h1>
          <span className="text-xl  text-stone-400">Thunderstorm</span>
        </div>
        <div className="flex justify-end w-full h-full">
          <video src={storm} autoPlay muted loop></video>
        </div>
      </div>
      <Condition />
    </section>
  );
};

export default Temperature;
