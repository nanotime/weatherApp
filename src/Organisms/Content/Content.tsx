import {
  WindStatus,
  WeatherForecast,
  Humidity,
  Visibility,
  Pressure,
} from '@/Molecules';
import flatenizeTw from '@/utils/flatenizeTw';

const contentClasses = flatenizeTw([
  // upper grid classes
  ['md:mt-3', 'md:col-span-4'],
  // sub grid classes
  ['md:grid', 'md:grid-rows', 'md:justify-center'],
]);

export const Content = () => {
  return (
    <div className={contentClasses}>
      <WeatherForecast />

      <div className="p-3 md:p-0">
        <h3 className="text-2xl py-3">Today’s Hightlights</h3>

        <div className="md:grid md:grid-cols-2 md:gap-2">
          <WindStatus />
          <Humidity />
        </div>
        <div className="mt-2 md:grid md:grid-cols-2 md:gap-2">
          <Visibility />
          <Pressure />
        </div>
      </div>
    </div>
  );
};
