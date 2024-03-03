// import { WeatherIcon, WeatherCard } from '@/Atoms';
import { WindStatus, WeatherForecast } from '@/Molecules';
import flatenizeTw from '@/utils/flatenizeTw';

const contentClasses = flatenizeTw([
  // upper grid classes
  ['md:mt-3', 'md:col-span-4'],
  // sub grid classes
  ['md:grid', 'md:grid-rows-3', 'md:justify-center'],
]);

export const Content = () => {
  return (
    <div className={contentClasses}>
      <WeatherForecast />

      <div className="p-3">
        <h3 className="text-3xl py-3">Today’s Hightlights</h3>
        <WindStatus />
      </div>
    </div>
  );
};
