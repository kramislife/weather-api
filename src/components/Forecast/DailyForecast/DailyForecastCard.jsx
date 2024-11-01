import WeatherInfo from "./WeatherInfo";
import AlertSection from "./AlertSection";
import AdditionalInfo from "./AdditionalInfo";

const DailyForecastCard = ({ item }) => {
  return (
    <div className="bg-gray-700/20 rounded-2xl p-5 mx-4 my-3 space-y-8">
      <WeatherInfo
        name={item.name}
        date={item.date}
        condition={item.condition}
        temperature={item.temperature}
        humidity={item.humidity}
      />
      <AlertSection alerts={item.alerts} />
      <AdditionalInfo
        heatIndex={item.heatIndex}
        cloudCover={item.cloudCover}
        dewPoint={item.dewPoint}
        wind={item.wind}
      />
    </div>
  );
};

export default DailyForecastCard;
