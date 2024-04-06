import { useEffect } from 'react';

import { type TodayForecast } from '@/Model/TodayForecast';
import { type Forecast } from '@/Model/Forecast';

import flatenizeTw from '@utils/flatenizeTw';
import useGeo from '@/utils/useGeo';
import useUserLocales from '@/utils/useUserLocales';

import { http } from '@utils/httpInstance';
import { Content, Sidebar } from '@organisms/index';
import { setGeo, setLocale } from '@/Store/AppConfigs';
import { setWeather } from '@/Store/Weather';
import { setForecast } from '@/Store/Forecast';

import './index.css';

const mainClasses = flatenizeTw([['md:grid', 'md:grid-cols-6']]);

function App() {
  const { position, error: geoError } = useGeo();
  const userLocales = useUserLocales();

  const getWeather = async (latitude: string, longitude: string) => {
    try {
      const today = await http.get<TodayForecast>(`/weather`, {
        params: { lat: latitude, lon: longitude },
      });
      const forecast = await http.get<Forecast>(`/forecast`, {
        params: { lat: latitude, lon: longitude },
      });

      if (today.data) setWeather(today.data);
      if (forecast.data) setForecast(forecast.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLocale(userLocales);

    if (!position) return;

    if (geoError) {
      console.error(geoError);
      return;
    }

    setGeo(position.latitude, position.longitude);
    getWeather(position.latitude.toString(), position.longitude.toString());
  }, [position, geoError, userLocales]);

  return (
    <main className={mainClasses}>
      <Sidebar />
      <Content />
    </main>
  );
}

export default App;
