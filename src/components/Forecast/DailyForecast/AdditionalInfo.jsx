const AdditionalInfo = ({ heatIndex, cloudCover, dewPoint, wind }) => {
  return (
    <div className="font-chakra text-stone-200 px-2">
      <div className="text-sm">
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="text-stone-300 font-bold">
              Heat Index: <span className="text-stone-400">{heatIndex}</span>
            </h1>
            <h1 className="text-stone-300 font-bold">
              Wind:{" "}
              <span className="text-stone-400">
                {wind.speed} {wind.direction}
              </span>
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-stone-300 font-bold">
              Cloud Cover: <span className="text-stone-400">{cloudCover}</span>
            </h1>
            <h1 className="text-stone-300 font-bold">
              Dew Point: <span className="text-stone-400">{dewPoint}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
