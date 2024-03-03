import { render } from '@testing-library/react';
import { HightlightCard } from './HightlightCard';

describe('HightlightCard', () => {
  test('renders children and title', () => {
    const title = 'Test Title';
    const { getByText } = render(
      <HightlightCard title={title}>
        <p>Test Content</p>
      </HightlightCard>
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  test('applies additional classes', () => {
    const testClass = ['test-class'];
    const title = 'Test Title';
    const { container } = render(
      <HightlightCard title={title} tw={testClass}>
        <p>Test Content</p>
      </HightlightCard>
    );
    expect(container.firstChild).toHaveClass(testClass[0]);
  });
});
