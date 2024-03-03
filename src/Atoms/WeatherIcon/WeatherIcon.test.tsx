import { render } from '@testing-library/react';
import { WeatherIcon } from './WeatherIcon';

describe('WeatherIcon', () => {
  test('renders weather icon with correct props', () => {
    const icon = 'Clear';
    const pathname = new URL('../../assets/Clear.png', import.meta.url)
      .pathname;
    const tw = ['tw-class'];
    const { getByAltText } = render(<WeatherIcon icon={icon} tw={tw} />);
    const imgElement = getByAltText(icon);

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', pathname);
    expect(imgElement).toHaveClass('tw-class');
  });
});
