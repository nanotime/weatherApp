import { render } from '@testing-library/react';
import { WeatherCard } from './WeatherCard';

describe('Card', () => {
  test('renders without crashing', () => {
    const tempRange = [20, 30];
    const dateTitle = '2024-03-04 03:00:00';
    const { getByText } = render(
      <WeatherCard title={dateTitle} tempRange={tempRange}>
        <div>Test Children</div>
      </WeatherCard>
    );
    expect(getByText('03/04/2024')).toBeInTheDocument();
    expect(getByText('20 - 30')).toBeInTheDocument();
  });
});
