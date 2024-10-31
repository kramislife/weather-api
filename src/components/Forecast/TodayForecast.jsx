import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { forecastCarouselItems } from "@/constant/Index";

const TodayForecast = () => {
  return (
    <section>
      <div className="flex h-full w-full px-5">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {forecastCarouselItems.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-1/3 md:basis-1/2 lg:basis-1/3 pl-0"
              >
                <div className="p-1">
                  <Card className="bg-gray-700/20 border-none rounded-2xl shadow-lg">
                    <CardContent className="flex flex-col gap-2 aspect-square items-center justify-center p-6">
                      <span className="text-stone-300">{item.time}</span>
                      <span className="text-stone-300">{item.condition}</span>
                      <span className="text-stone-300">{item.temperature}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-4 text-stone-300 bg-gray-700/20 border-none hover:bg-gray-700/40 hover:text-stone-200" />
          <CarouselNext className="absolute -right-4 text-stone-300 bg-gray-700/20 border-none hover:bg-gray-700/40 hover:text-stone-200" />
        </Carousel>
      </div>
    </section>
  );
};

export default TodayForecast;
