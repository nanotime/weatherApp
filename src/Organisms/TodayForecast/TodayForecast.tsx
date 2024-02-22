import CloudBackground from '@assets/Cloud-background.png';
import Clear from '@assets/Clear.png';
import { useContext } from 'react';
import { TodayForecastCtx } from '@/Providers/TodayForecast';

export const TodayForecast = () => {
  const { todayForecast } = useContext(TodayForecastCtx);

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

        <img src={Clear} alt="Clear" className="absolute" />
      </div>

      <div
        id="forecast-body"
        className="flex flex-col gap-5 text-center p-4 mb-4"
      >
        <h2 id="forecast-temperature" className="text-9xl">
          {todayForecast.main.temp}℃
        </h2>
        <p className="text-4xl">{todayForecast.weather[0].description}</p>
      </div>

      <div
        id="forecast-footer"
        className="p-4 flex justify-center items-center gap-2"
      >
        <p className="text-xl">Today</p>
        <div className="divider divider-horizontal">•</div>
        <p className="text-xl">{todayForecast.name}</p>
      </div>
    </section>
  );
};
