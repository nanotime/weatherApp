import { render, screen } from '@testing-library/react';
import { WindStatus } from './WindStatus';

describe('WindStatus', () => {
  test('renders wind speed', () => {
    render(<WindStatus />);
    const windSpeedElement = screen.getByText(/Kph/);
    expect(windSpeedElement).toBeInTheDocument();
  });

  test('renders wind direction icon', () => {
    render(<WindStatus />);
    const windDirectionIcon = screen.getByTestId('wind-direction-icon');
    expect(windDirectionIcon).toBeInTheDocument();
  });
});
