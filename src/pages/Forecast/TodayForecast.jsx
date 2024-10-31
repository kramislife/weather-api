import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TodayForecastItems } from "@/constant/TodayForecastItems";

const TodayForecast = () => {
  return (
    <section>
      <div className="flex h-full w-full px-5 overflow-hidden pt-5">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {TodayForecastItems.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-1/3 md:basis-1/2 lg:basis-1/3 pl-0"
              >
                <div className="flex items-center justify-center p-1">
                  <Card className="bg-gray-700/20 border-none rounded-2xl shadow-lg">
                    <CardContent className="flex flex-col gap-5 aspect-square items-center justify-center p-6">
                      <span className="text-stone-300 text-center">{item.time}</span>
                      <video
                        autoPlay
                        muted
                        playsInline
                        loop
                        loading="lazy"
                        className="text-stone-300 h-12 w-12"
                        src={item.condition}
                      />
                      <span className="text-stone-300">{item.temperature}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-4 text-white bg-gray-700/20 border-none" />
          <CarouselNext className="absolute -right-4 text-white bg-gray-700/20 border-none" />
        </Carousel>
      </div>
    </section>
  );
};

export default TodayForecast;
