import numeral from 'numeral';

import { WeatherIcon } from '@atoms/index';
import CloudBackground from '@assets/Cloud-background.png';
import { useWeather } from '@/Store/Weather';

export const TodayForecast = () => {
  const weather = useWeather((state) => state.weather);
  const mainForecast = useWeather((state) => state.main);
  const cityName = useWeather((state) => state.name);

  return (
    <section id="today-forecast">
      <div
        id="foreacast-header"
        className="w-full h-80 relative flex items-center justify-center"
      >
        <div
          id="forecast-bg"
          className="bg-left-bottom w-full h-full opacity-20"
          style={{ backgroundImage: `url(${CloudBackground})` }}
        />

        <WeatherIcon icon={weather[0].main} tw={['absolute']} />
      </div>

      <div
        id="forecast-body"
        className="flex flex-col gap-5 text-center p-4 mb-4"
      >
        <h2 id="forecast-temperature" className="text-9xl">
          {numeral(mainForecast.temp).format('0')}℃
        </h2>
        <p className="text-4xl capitalize">{weather[0].description}</p>
      </div>

      <div
        id="forecast-footer"
        className="p-4 flex justify-center items-center gap-2"
      >
        <p className="text-xl">Today</p>
        <div className="divider divider-horizontal">•</div>
        <p className="text-xl capitalize">{cityName}</p>
      </div>
    </section>
  );
};
