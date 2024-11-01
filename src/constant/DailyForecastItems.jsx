import cloudy from '@/assets/cloudy-night.webm'
import mist from '@/assets/mist.webm'
import night from '@/assets/night.webm'
import rain from '@/assets/rain.webm'
import snow from '@/assets/snow.webm'
import storm from '@/assets/storm.webm'
import sunny from '@/assets/sunny.webm'
import stormyShowerDay from '@/assets/stormy-shower(day).webm'
import thunder from '@/assets/thunder.webm'
import windyCloud from '@/assets/windy-cloud.webm'
import windy from '@/assets/windy.webm'
export const DailyForecastItems = [
    {
        id: 1,
        name: 'Monday',
        date: '10/31',
        temperature: '22°C',
        condition: storm,
        description: 'Stormy',
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
    {
        id: 2,
        name: 'Tuesday',
        date: '11/1',
        temperature: '24°C',
        condition: stormyShowerDay,
        description: 'Stormy Showers',
        humidity: '65%',
        alerts: [{
            category: 'Typhoon',
            severity: 'Category 3',
            description: 'Strong winds and heavy rainfall expected',
            timing: {
                from: {
                    time: '2:00 PM',
                    day: 'Tuesday'
                },
                to: {
                    time: '3:00 PM',
                    day: 'Wednesday'
                }
            }
        }],
        heatIndex: '26°C',
        wind: {
            speed: '40 km/h',
            direction: 'NE'
        },
        cloudCover: '80%',
        dewPoint: '22°C',
    },
    // {
    //     id: 3,
    //     name: 'Wednesday',
    //     date: '11/2',
    //     temperature: '23°C',
    //     condition: mist,
    //     description: 'Misty',
    //     humidity: '70%',
    //     alerts: [{
    //         category: 'Flood',
    //         severity: 'Moderate',
    //         description: 'Possible flooding in low-lying areas',
    //         timing: {
    //             from: {
    //                 time: '6:00 AM',
    //                 day: 'Wednesday'
    //             },
    //             to: {
    //                 time: '6:00 PM',
    //                 day: 'Wednesday'
    //             }
    //         }
    //     }],
    //     heatIndex: '25°C',
    //     wind: {
    //         speed: '35 km/h',
    //         direction: 'N'
    //     },
    //     cloudCover: '90%',
    //     dewPoint: '21°C',
    // },
    // {
    //     id: 4,
    //     name: 'Thursday',
    //     date: '11/3',
    //     temperature: '21°C',
    //     condition: rain,
    //     description: 'Rainy',
    //     humidity: '75%',
    //     alerts: [{
    //         category: 'Heavy Rain',
    //         severity: 'High',
    //         description: 'Continuous heavy rainfall expected',
    //         timing: {
    //             from: {
    //                 time: '12:00 PM',
    //                 day: 'Thursday'
    //             },
    //             to: {
    //                 time: '12:00 AM',
    //                 day: 'Friday'
    //             }
    //         }
    //     }],
    //     heatIndex: '23°C',
    //     wind: {
    //         speed: '30 km/h',
    //         direction: 'NW'
    //     },
    //     cloudCover: '95%',
    //     dewPoint: '19°C',
    // },
    // {
    //     id: 5,
    //     name: 'Friday',
    //     date: '11/4',
    //     temperature: '20°C',
    //     condition: thunder,
    //     description: 'Thunderstorm',
    //     humidity: '80%',
    //     alerts: [{
    //         category: 'Landslide',
    //         severity: 'High',
    //         description: 'Risk of landslides in mountainous areas',
    //         timing: {
    //             from: {
    //                 time: '6:00 AM',
    //                 day: 'Friday'
    //             },
    //             to: {
    //                 time: '6:00 PM',
    //                 day: 'Friday'
    //             }
    //         }
    //     }],
    //     heatIndex: '22°C',
    //     wind: {
    //         speed: '25 km/h',
    //         direction: 'W'
    //     },
    //     cloudCover: '75%',
    //     dewPoint: '18°C',
    // },
    // {
    //     id: 6,
    //     name: 'Saturday',
    //     date: '11/5',
    //     temperature: '19°C',
    //     condition: windyCloud,
    //     description: 'Windy with Clouds',
    //     humidity: '85%',
    //     alerts: [{
    //         category: 'Storm Surge',
    //         severity: 'Moderate',
    //         description: 'Coastal areas may experience storm surge',
    //         timing: {
    //             from: {
    //                 time: '3:00 PM',
    //                 day: 'Saturday'
    //             },
    //             to: {
    //                 time: '9:00 PM',
    //                 day: 'Saturday'
    //             }
    //         }
    //     }],
    //     heatIndex: '21°C',
    //     wind: {
    //         speed: '50 km/h',
    //         direction: 'SW'
    //     },
    //     cloudCover: '70%',
    //     dewPoint: '17°C',
    // },
    // {
    //     id: 7,
    //     name: 'Sunday',
    //     date: '11/6',
    //     temperature: '18°C',
    //     condition: windy,
    //     description: 'Windy',
    //     humidity: '90%',
    //     alerts: [{
    //         category: 'Wind',
    //         severity: 'High',
    //         description: 'Strong gusty winds expected',
    //         timing: {
    //             from: {
    //                 time: '8:00 AM',
    //                 day: 'Sunday'
    //             },
    //             to: {
    //                 time: '8:00 PM',
    //                 day: 'Sunday'
    //             }
    //         }
    //     }],
    //     heatIndex: '20°C',
    //     wind: {
    //         speed: '55 km/h',
    //         direction: 'S'
    //     },
    //     cloudCover: '65%',
    //     dewPoint: '16°C',
    // }
]