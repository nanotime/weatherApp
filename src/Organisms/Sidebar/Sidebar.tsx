import { NavBar, TodayForecast } from '..';
import flatenizeTw from '@/utils/flatenizeTw';

const sideBarClasses = flatenizeTw([
  ['md:col-span-2', 'md:bg-base-100', 'md:h-screen'],
]);

export const Sidebar = () => {
  return (
    <div className={sideBarClasses}>
      <NavBar />
      <TodayForecast />
    </div>
  );
};
