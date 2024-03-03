import { WeatherCard, WeatherIcon } from '@/Atoms';
import flatenizeTw from '@/utils/flatenizeTw';
import { useForecast } from '@/Store/Forecast';

const forecast5Classes = flatenizeTw([
  // xs grid
  ['grid', 'grid-cols-2', 'gap-2', 'place-items-center'],
  // sm grid
  ['sm:grid-cols-3'],
  ['lg:grid-cols-5'],
]);

export const WeatherForecast = () => {
  const forecast5Days = useForecast(state => state.list);
  return (
    <div id="5-day-forecast" className={forecast5Classes}>
      {forecast5Days.map(day => {
        return (
          <WeatherCard
            key={day.dt}
            title={day.dt_txt}
            tempRange={[day.main.temp_min, day.main.temp_max]}
          >
            <WeatherIcon icon={day.weather[0].main} />
          </WeatherCard>
        );
      })}
    </div>
  );
};
