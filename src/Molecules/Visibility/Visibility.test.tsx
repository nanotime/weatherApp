import { render } from '@testing-library/react';
import { Visibility } from './Visibility';

describe('Visibility', () => {
  test('renders visibility value correctly', () => {
    const { getByTestId } = render(<Visibility />);
    const visibilityValue = getByTestId('visibility-value');
    expect(visibilityValue).toBeInTheDocument();
  });
});
