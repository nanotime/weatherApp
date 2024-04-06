import axios from 'axios';

export const http = axios.create({
  baseURL: import.meta.env.VITE_WEATHER_BASE_API_URL,
  params: {
    units: 'metric',
    appid: import.meta.env.VITE_WEATHER_API_KEY,
    cnt: '5',
  },
});
