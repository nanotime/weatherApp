import { NavBar, TodayForecast } from '..';
import flatenizeTw from '@/utils/flatenizeTw';

const sideBarClasses = flatenizeTw([
  ['md:col-span-2', 'md:bg-base-100', 'md:h-full'],
  // ['bg-gradient-to-bl from-purple-300 to-cyan-700'],
]);

export const Sidebar = () => {
  return (
    <div className={sideBarClasses}>
      <NavBar />
      <TodayForecast />
    </div>
  );
};
