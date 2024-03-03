import { create } from 'zustand';
import { type Forecast } from '@/Model/Forecast';

export const useForecast = create<Forecast>()(() => ({
  cod: '200',
  message: 0,
  cnt: 5,
  list: [
    {
      dt: 1709499600,
      main: {
        temp: 26.76,
        feels_like: 25.85,
        temp_min: 26.76,
        temp_max: 27.02,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 787,
        humidity: 17,
        temp_kf: -0.26,
      },
      weather: [
        {
          id: 802,
          main: 'Clear',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 40,
      },
      wind: {
        speed: 1.11,
        deg: 176,
        gust: 4.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-03 21:00:00',
    },
    {
      dt: 1709510400,
      main: {
        temp: 25.79,
        feels_like: 24.89,
        temp_min: 23.85,
        temp_max: 25.79,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 786,
        humidity: 18,
        temp_kf: 1.94,
      },
      weather: [
        {
          id: 802,
          main: 'Clear',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 39,
      },
      wind: {
        speed: 4.13,
        deg: 195,
        gust: 4.41,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-04 00:00:00',
    },
    {
      dt: 1709521200,
      main: {
        temp: 21.57,
        feels_like: 20.46,
        temp_min: 18.98,
        temp_max: 21.57,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 786,
        humidity: 26,
        temp_kf: 2.59,
      },
      weather: [
        {
          id: 802,
          main: 'Clear',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 31,
      },
      wind: {
        speed: 2.47,
        deg: 199,
        gust: 3.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-04 03:00:00',
    },
    {
      dt: 1709532000,
      main: {
        temp: 17.4,
        feels_like: 16.11,
        temp_min: 17.4,
        temp_max: 17.4,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 786,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clear',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 54,
      },
      wind: {
        speed: 2.03,
        deg: 198,
        gust: 2.82,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-04 06:00:00',
    },
    {
      dt: 1709542800,
      main: {
        temp: 16.07,
        feels_like: 14.72,
        temp_min: 16.07,
        temp_max: 16.07,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 785,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clear',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 1.3,
        deg: 215,
        gust: 1.99,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-04 09:00:00',
    },
  ],
  city: {
    id: 3519910,
    name: 'San Andrés Tetepilco',
    coord: {
      lat: 19.3685,
      lon: -99.1452,
    },
    country: 'MX',
    population: 0,
    timezone: -21600,
    sunrise: 1709470455,
    sunset: 1709512971,
  },
}));
