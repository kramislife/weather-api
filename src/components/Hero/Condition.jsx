import windyCloud from "@/assets/windy-cloud.webm";
import rain from "@/assets/rain.webm";
import humid from "@/assets/humid.webm";

const Condition = () => {
  return (
    <section>
      <div className="bg-gray-700/20 rounded-2xl mx-4 my-3 py-5">
        <div className="flex flex-row justify-around items-center">
          <div className="flex flex-col items-center justify-center">
            <video
              src={windyCloud}
              loop
              muted
              autoPlay
              className="w-16 h-16"
            ></video>
            <h1 className="text-xl text-stone-300 tracking-wide pt-2">10 m/s</h1>
            <span className="text-md text-stone-400 font-chakra font-semibold">
              Wind
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <video
              src={humid}
              loop
              muted
              autoPlay
              className="w-16 h-16"
            ></video>
            <h1 className="text-xl text-stone-300 tracking-wide pt-2">98%</h1>
            <span className="text-md text-stone-400 font-chakra font-semibold">
              Humidity
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <video
              src={rain}
              loop
              muted
              autoPlay
              className="w-16 h-16"
            ></video>
            <h1 className="text-xl text-stone-300 tracking-wide pt-2">100%</h1>
            <span className="text-md text-stone-400 font-chakra font-semibold">
              Rain
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Condition;
