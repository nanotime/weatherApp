import { WeatherIcon, WeatherCard } from '@/Atoms';
import flatenizeTw from '@/utils/flatenizeTw';

const contentClasses = flatenizeTw([
  // upper grid classes
  ['md:mt-3', 'md:col-span-4'],
  // sub grid classes
  ['md:grid', 'md:grid-rows-3', 'md:justify-center'],
]);

const forecast5Classes = flatenizeTw([
  // xs grid
  ['grid', 'grid-cols-2', 'gap-2', 'place-items-center'],
  // sm grid
  ['sm:grid-cols-3'],
  ['lg:grid-cols-5'],
]);

export const Content = () => {
  return (
    <div className={contentClasses}>
      <div id="5-day-forecast" className={forecast5Classes}>
        <WeatherCard title="test" tempRange={['10', '20']}>
          <WeatherIcon icon="Clear" />
        </WeatherCard>
        <WeatherCard title="test" tempRange={['10', '20']}>
          <WeatherIcon icon="Thunderstorm" />
        </WeatherCard>
        <WeatherCard title="test" tempRange={['10', '20']}>
          <WeatherIcon icon="Hail" />
        </WeatherCard>
        <WeatherCard title="test" tempRange={['10', '20']}>
          <WeatherIcon icon="Hail" />
        </WeatherCard>
        <WeatherCard title="test" tempRange={['10', '20']}>
          <WeatherIcon icon="Hail" />
        </WeatherCard>
      </div>
      <div className="">
        <h2>Trabajanding...</h2>
      </div>
    </div>
  );
};
