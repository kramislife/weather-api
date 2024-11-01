import DailyForecastCard from "@/components/Forecast/DailyForecast/DailyForecastCard";
import { DailyForecastItems } from "@/constant/DailyForecastItems";

const DailyForecast = () => {
  return (
    <section>
      <div className="space-y-5">
        {DailyForecastItems.map((item) => (
         <DailyForecastCard key={item.id} item={item}/>
        ))}
      </div>
    </section>
  );
};

export default DailyForecast;
