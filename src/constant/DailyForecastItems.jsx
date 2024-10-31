import rainy from "@/assets/rain.webm";

export const DailyForecastItems = [
    {
        id: 1,
        name: 'Monday',
        date: '10/31',
        temperature: '22°C',
        condition: rainy,
        description: 'Rainy',
        humidity: '60%',
        alerts: [{
            category: 'Typhoon',
            severity: 'Category 3',
            description: 'Strong winds and heavy rainfall expected',
            timing: {
                from: {
                    time: '1:00 PM',
                    day: 'Monday'
                },
                to: {
                    time: '2:00 PM',
                    day: 'Tuesday'
                }
            }
        }],
        heatIndex: '24°C',
        wind: {
            speed: '45 km/h',
            direction: 'NE'
        },
        cloudCover: '85%',
        dewPoint: '20°C',
    },
    // {
    //     id: 2,
    //     name: 'Tuesday',
    //     temperature: '22°C',
    //     condition: 'sunny',
    //     description: 'Sunny',
    // },
    // {
    //     id: 3,
    //     name: 'Wednesday',
    //     temperature: '22°C',
    //     condition: 'stormy',
    //     description: 'Stormy',
    // },
    // {
    //     id: 4,
    //     name: 'Thursday',
    //     temperature: '22°C',
    //     condition: 'windy',
    //     description: 'Windy',
    // },
    // {
    //     id: 5,
    //     name: 'Friday',
    //     temperature: '22°C',
    //     condition: 'cloudy',
    //     description: 'Cloudy',
    // },
    // {
    //     id: 6,
    //     name: 'Saturday',
    //     temperature: '22°C',
    //     condition: 'snowy',
    //     description: 'Snowy',
    // },
    // {
    //     id: 7,
    //     name: 'Sunday',
    //     temperature: '22°C',
    //     condition: 'mist',
    //     description: 'Mist',
    // }
]