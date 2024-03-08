import { render } from '@testing-library/react';
import { Pressure } from './Pressure';

describe('Pressure', () => {
  test('renders pressure value correctly', () => {
    const { getByTestId } = render(<Pressure />);
    const pressureValue = getByTestId('pressure-value');
    expect(pressureValue).toBeInTheDocument();
  });
});
