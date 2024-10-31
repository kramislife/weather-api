import cloudy from '@/assets/cloudy-night.webm'
import mist from '@/assets/mist.webm'
import night from '@/assets/night.webm'
import partlyCloudy from '@/assets/partly-cloudy.webm'
import partlyShower from '@/assets/partly-shower.webm'
import rain from '@/assets/rain.webm'
import rainyNight from '@/assets/rainy-night.webm'
import snowSunny from '@/assets/snow-sunny.webm'
import snow from '@/assets/snow.webm'
import storm from '@/assets/storm.webm'
import sunny from '@/assets/sunny.webm'
import stormyShowerDay from '@/assets/stormy-shower(day).webm'
import thunder from '@/assets/thunder.webm'
import windyCloud from '@/assets/windy-cloud.webm'
import windy from '@/assets/windy.webm'

export const navItems = [
	{
        id: 1,
		name: 'Today',
		path: '/',
	},
    {
        id: 2,
        name: 'Hourly',
        path: '/hourly',
    },
    {
        id: 3,
        name: 'Weekly',
        path: '/weekly',
    },
    {
        id: 4,
        name: 'Monthly',
        path: '/monthly',
    },
    {
        id: 5,
        name: 'Yearly',
        path: '/yearly',
    }
]

// For Forecast Navbar
export const forecastNavItems = [
    {
        id: 1,
        name: 'Today',
        path: '/',
    },
    {
        id: 2,
        name: 'Tomorrow',
        path: '/tomorrow',
    },
    {
        id: 3,
        name: '7 Days',
        path: '/next-7-days',
    }, 
    {
        id: 4,
        name: '30 Days',
        path: '/next-30-days',
    }
]

// For Today Forecast Carousel
export const forecastCarouselItems = [
    {
        id: 1,
        time: '12:00',
        temperature: '25°C',
        condition: 'Sunny',
    },
    {
        id: 2,
        time: '13:00',
        temperature: '26°C',
        condition: 'Cloudy',
    },
    {
        id: 3,
        time: '14:00',
        temperature: '27°C',
        condition: 'Rainy',
    },
    {
        id: 4,
        time: '15:00',
        temperature: '28°C',
        condition: 'Humid',
    },
    {
        id: 5,
        time: '16:00',
        temperature: '29°C',
        condition: 'Sunny',
    }
]

// For Tomorrow Forecast 
export const tomorrowForecast = [
{
    id: 1,
    time: '12:00 AM',
    temperature: '22°C',
    condition: night,
    description: 'Night',
},
  {
    id: 2,
    time: "1:00 AM",
    temperature: "21°C",
    condition: night,
    description: "Night",
  },
  {
    id: 3,
    time: "2:00 AM", 
    temperature: "21°C",
    condition: partlyCloudy,
    description: "Partly Cloudy",
  },
  {
    id: 4,
    time: "3:00 AM",
    temperature: "20°C",
    condition: cloudy,
    description: "Cloudy Night",
  },
  {
    id: 5,
    time: "4:00 AM",
    temperature: "20°C",
    condition: cloudy,
    description: "Cloudy Night",
  },
  {
    id: 6,
    time: "5:00 AM",
    temperature: "20°C",
    condition: mist,
    description: "Mist",
  },
  {
    id: 7,
    time: "6:00 AM",
    temperature: "21°C",
    condition: partlyCloudy,
    description: "Partly Cloudy",
  },
  {
    id: 8,
    time: "7:00 AM",
    temperature: "22°C",
    condition: partlyShower,
    description: "Partly Shower",
  },
  {
    id: 9,
    time: "8:00 AM",
    temperature: "23°C",
    condition: sunny,
    description: "Sunny",
  },
  {
    id: 10,
    time: "9:00 AM",
    temperature: "24°C",
    condition: sunny,
    description: "Sunny",
  },
  {
    id: 11,
    time: "10:00 AM",
    temperature: "25°C",
    condition: stormyShowerDay,
    description: "Stormy Shower",
  },
  {
    id: 12,
    time: "11:00 AM",
    temperature: "26°C",
    condition: storm,
    description: "Storm",
  },
  {
    id: 13,
    time: "12:00 PM",
    temperature: "27°C",
    condition: thunder,
    description: "Thunder",
  },
  {
    id: 14,
    time: "1:00 PM",
    temperature: "28°C",
    condition: rain,
    description: "Rain",
  },
  {
    id: 15,
    time: "2:00 PM",
    temperature: "29°C",
    condition: snowSunny,
    description: "Snow Sunny",
  },
  {
    id: 16,
    time: "3:00 PM",
    temperature: "29°C",
    condition: snow,
    description: "Snow",
  },
  {
    id: 17,
    time: "4:00 PM",
    temperature: "28°C",
    condition: windyCloud,
    description: "Windy Cloud",
  },
  {
    id: 18,
    time: "5:00 PM",
    temperature: "27°C",
    condition: windy,
    description: "Windy",
  },
  {
    id: 19,
    time: "6:00 PM",
    temperature: "26°C",
    condition: rainyNight,
    description: "Rainy Night",
  },
  {
    id: 20,
    time: "7:00 PM",
    temperature: "25°C",
    condition: night,
    description: "Night",
  },
  {
    id: 21,
    time: "8:00 PM",
    temperature: "24°C",
    condition: night,
    description: "Night",
  },
  {
    id: 22,
    time: "9:00 PM",
    temperature: "23°C",
    condition: night,
    description: "Night",
  },
  {
    id: 23,
    time: "10:00 PM",
    temperature: "23°C",
    condition: night,
    description: "Night",
  },
  {
    id: 24,
    time: "11:00 PM",
    temperature: "22°C",
    condition: night,
    description: "Night",
  },
];
