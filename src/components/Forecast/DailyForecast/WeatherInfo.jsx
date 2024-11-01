import { Droplet } from 'lucide-react'

const WeatherInfo = ({ name, date, condition, temperature, humidity }) => {
  return (
    <div className="flex flex-row justify-between items-center w-full space-x-10">
              <div>
                <h1 className="font-chakra text-sm tracking-wide">
                  {name}
                </h1>
                <span className="text-sm text-stone-400 font-chakra">
                  {date}
                </span>
              </div>
              <div className="flex justify-between w-full">
                <div className="flex flex-row gap-3">
                  <video
                    src={condition}
                    loop
                    muted
                    autoPlay
                    className="w-12 h-12"
                  ></video>
                  <h1 className="text-4xl tracking-wide">{temperature}</h1>
                </div>
                <div>
                  <span className="flex items-center text-md text-stone-400 font-chakra gap-1">
                    <Droplet size={16} />
                    {humidity}
                  </span>
                </div>
              </div>
            </div>
  )
}

export default WeatherInfo
