import { create } from 'zustand';
import { TodayForecast } from '@/Model/TodayForecast';

export const useWeather = create<TodayForecast>()(() => ({
  coord: {
    lon: -99.1452,
    lat: 19.3685,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01n',
    },
  ],
  main: {
    temp: 19.99,
    feels_like: 18.51,
    temp_min: 18.25,
    temp_max: 20.05,
    pressure: 1023,
    humidity: 18,
  },
  visibility: 10000,
  wind: {
    speed: 3.6,
    deg: 20,
  },
  clouds: {
    all: 0,
  },
  dt: 1708395734,
  sys: {
    type: 2,
    id: 2040357,
    country: 'MX',
    sunrise: 1708347794,
    sunset: 1708389479,
  },
  timezone: -21600,
  id: 7280718,
  name: 'Colonia Nativitas',
  cod: 200,
}));
