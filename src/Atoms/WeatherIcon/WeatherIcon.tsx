import { FC } from 'react';
import twClasses from '@/utils/twClasses';
import weatherCodesMap from '@/utils/weatherCodesMap';

const iconUrl = (icon: string, animated?: boolean) =>
  animated
    ? new URL(`../../assets/animated/${icon}.svg`, import.meta.url).pathname
    : new URL(`../../assets/static/${icon}.svg`, import.meta.url).pathname;

type Props = {
  description: string;
  tw?: string[];
  code: number;
  animated?: boolean;
};

export const WeatherIcon: FC<Props> = ({ code, tw, description, animated }) => {
  const findCode = (c: number) => c === code;
  const icons = Array.from(weatherCodesMap.keys()) as string[];

  return icons.map((icon) => {
    const item = weatherCodesMap.get(icon)?.find(findCode);
    if (item) {
      return (
        <img
          key={`${icon}-${description}`}
          src={iconUrl(icon, animated)}
          alt={description}
          className={twClasses(tw)}
        />
      );
    }
  });
};
