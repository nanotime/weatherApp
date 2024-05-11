import { FC } from 'react';
import twClasses from '@/utils/twClasses';

const IconUrlGetter = (icon: string) =>
  new URL(`../../assets/${icon}.png`, import.meta.url).pathname;

const Icons = new Map<string, string>([
  ['Clear', IconUrlGetter('Clear')],
  ['Hail', IconUrlGetter('Hail')],
  ['Clouds', IconUrlGetter('Clouds')],
  ['HeavyRain', IconUrlGetter('LightRain')],
  ['LightCloud', IconUrlGetter('LightCloud')],
  ['LightRain', IconUrlGetter('LightRain')],
  ['Rain', IconUrlGetter('LightRain')],
  ['Shower', IconUrlGetter('Shower')],
  ['Snow', IconUrlGetter('Snow')],
  ['Sleet', IconUrlGetter('Sleet')],
  ['Thunderstorm', IconUrlGetter('Thunderstorm')],
]);

type Props = {
  icon: string;
  tw?: string[];
};

export const WeatherIcon: FC<Props> = ({ icon, tw }) => {
  return <img src={Icons.get(icon)} alt={icon} className={twClasses(tw)} />;
};
