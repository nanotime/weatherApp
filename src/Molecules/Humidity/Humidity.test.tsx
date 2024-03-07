import { render } from '@testing-library/react';
import { Humidity } from '..';

describe('Humidity', () => {
  test('renders humidity percentage correctly', () => {
    const { getByText } = render(<Humidity />);
    const humidityPercentage = getByText('18%');
    expect(humidityPercentage).toBeInTheDocument();
  });

  test('renders progress bar with correct value', () => {
    const { getByTestId } = render(<Humidity />);
    const progressBar = getByTestId('humidity-bar-progress');
    expect(progressBar).toHaveAttribute('value', '18');
  });
});
