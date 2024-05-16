import { render } from '@testing-library/react';
import { WeatherIcon } from './WeatherIcon';

const fixtureFactory = (id: number, description: string, icon: string) => ({
  id,
  description,
  icon,
});

const fixture = {
  clear: fixtureFactory(800, 'clear sky', 'clear-day'),
  clouds: fixtureFactory(801, 'few clouds', 'cloudy'),
  drizzle: fixtureFactory(300, 'light drizzle', 'rain-and-sleet-mix'),
  thunderstorm: fixtureFactory(200, 'thunderstorm', 'thunderstorms'),
  severeStorm: fixtureFactory(212, 'heavy thunderstorm', 'severe-thunderstorm'),
  rain: fixtureFactory(500, 'light rain', 'rainy-1'),
  moderateRain: fixtureFactory(521, 'shower rain', 'rainy-2'),
  heavyRain: fixtureFactory(503, 'very heavy rain', 'rainy-3'),
  snow: fixtureFactory(600, 'light snow', 'snowy-1'),
  heavySnow: fixtureFactory(602, 'heavy snow', 'snowy-3'),
  moderateSnow: fixtureFactory(611, 'moderate snow', 'snowy-2'),
  fog: fixtureFactory(741, 'fog', 'fog'),
  atmosphere: fixtureFactory(701, 'haze', 'haze-day'),
  haze: fixtureFactory(721, 'haze', 'haze'),
  dust: fixtureFactory(761, 'dust', 'dust'),
};

const genericTest = (
  fixt: typeof fixture,
  key: keyof typeof fixture,
  animated?: boolean
) => {
  const icon = (icon: string) =>
    animated
      ? `/src/assets/animated/${icon}.svg`
      : `/src/assets/static/${icon}.svg`;
  const tw = ['tw-class'];
  const { getByAltText } = render(
    <WeatherIcon
      code={fixt[key].id}
      description={fixt[key].description}
      tw={tw}
      animated={animated}
    />
  );
  const imgElement = getByAltText(fixt[key].description);
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', icon(fixt[key].icon));
  expect(imgElement).toHaveAttribute('alt', fixt[key].description);
  expect(imgElement).toHaveClass('tw-class');
};

describe('WeatherIcon', () => {
  Object.keys(fixture).forEach((key) => {
    test(`renders ${key} weather icon`, () => {
      genericTest(fixture, key as keyof typeof fixture);
    });
  });

  Object.keys(fixture).forEach((key) => {
    test(`renders ${key} weather icon`, () => {
      genericTest(fixture, key as keyof typeof fixture, true);
    });
  });
});
